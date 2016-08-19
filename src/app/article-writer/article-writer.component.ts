import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { Article } from '../article';
import { Character } from '../character';
import { Raid, Boss } from '../raid';
import { ArticleService } from '../article.service';
import { CharacterService } from '../character.service';
import { RaidService } from '../raid.service';

@Component({
  moduleId: module.id,
  selector: 'app-article-writer',
  templateUrl: 'article-writer.component.html',
  styleUrls: ['article-writer.component.css']
})
export class ArticleWriterComponent implements OnInit {
  public article: Article;
  public link: string;
  public character: Character;
  public raid: Raid;
  public boss: Boss;

  public characters: Character[];
  public bosses: Boss[];
  public raids: Raid[];

  public article_type: string;


  constructor(private _articleService: ArticleService,
              private _characterService: CharacterService,
              private _raidService: RaidService) { }

  @Input() user: User;

  ngOnInit() {
    this.article = <Article>{};
    this._characterService.getCharacters().then(
        characters => this.characters = characters
    );
    this._raidService.getRaids().then(
        raids => this.getCurrentRaid(raids)
    );
    if(this.user){
        console.log(this.user);
        if(this.user.main){
            console.log(this.user.main);
            this.character = this.user.main;
        }
    }
  }

  getCurrentRaid(raids: Raid[]){
     this.raids = raids;
     if(raids.length > 0){
         this.raid = raids[0];
         this.getBosses();
     }
  }

  getBosses(){
      this._raidService.getBosses(this.raid).then(
          bosses => this.bosses = bosses
      )
  }

  submit(){
    if(this.article_type === 'link'){
        this.article.link = this.link;
    }else if(this.article_type === 'log'){
        this.article.log = this.link;
    }else if(this.article_type === 'youtube'){
        this.article.youtube = this.link
    }else if(this.article_type === 'image'){
        console.debug('add images');
    }
    this._articleService.publishArticle(this.article);
    this.article = <Article>{};
  }

}
