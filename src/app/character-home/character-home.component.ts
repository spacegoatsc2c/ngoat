import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CharacterService } from '../character.service';
import { ArticleService } from '../article.service';
import { Character } from '../character';
import { Article } from '../article';

@Component({
  moduleId: module.id,
  selector: 'app-character-home',
  templateUrl: 'character-home.component.html',
  styleUrls: ['character-home.component.css']
})
export class CharacterHomeComponent implements OnInit {
  private sub: Subscription;
  public character: Character;
  private articles: Article[];
  public character_url: string;

  constructor(private characterService: CharacterService,
              private articleService: ArticleService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.characterService.getCharacter(id).then(character => this.setCharacter(character));
     });
   }

   private setCharacter(character: Character){
     this.character = character;
     this.articleService.getCharacterArticles(this.character.id).then(
         articles => this.articles = articles
     );
     this.character_url = "http://us.battle.net/wow/en/character/" + character.realm + "/" + character.name + "/advanced"
   }

}
