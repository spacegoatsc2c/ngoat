import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { Article } from '../article';
import { Character } from '../character';
import { Raid, Boss } from '../raid';
import { ArticleService } from '../article.service';
import { CharacterService } from '../character.service';
import { RaidService } from '../raid.service';
import { UserService } from '../user.service';

@Component({
  moduleId: module.id,
  selector: 'app-article-writer',
  templateUrl: 'article-writer.component.html',
  styleUrls: ['article-writer.component.css']
})
export class ArticleWriterComponent implements OnInit {
  public user: User;
  public article: Article;
  public link: string;
  public character: Character;
  public raid: Raid;
  public boss: Boss;

  public characters: Character[];
  public bosses: Boss[];
  public raids: Raid[];

  public filesToUpload: Array<File>;

  constructor(private articleService: ArticleService,
              private userService: UserService,
              private characterService: CharacterService,
              private raidService: RaidService) { }

  ngOnInit() {
    this.article = <Article>{};
    this.article.article_type = 'text';
    this.characterService.getCharacters().then(
        characters => this.characters = characters
    );
    this.raidService.getRaids().then(
        raids => this.getCurrentRaid(raids)
    );
    let token = this.userService.token;
    if(token){
      this.userService.getUser(token).then(
        user => {this.user = user; this.character = this.user.main; }
      );
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
      this.raidService.getBosses(this.raid).then(
          bosses => this.bosses = bosses
      )
  }

  fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  submit(){
    // First upload image, then set link to the upload result
    console.log(this.article);
    this.articleService.publishArticle(this.article, this.user.token);
    this.article = <Article>{};
  }

}
