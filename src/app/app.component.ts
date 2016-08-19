import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { ArticleService } from './article.service';
import { FeedComponent } from './feed/feed.component';
import { RosterComponent } from './roster/roster.component';
import { CharacterService } from './character.service';
import { RaidService } from './raid.service';
import { RaidComponent } from './raid/raid.component';
import { ArticleWriterComponent } from './article-writer/article-writer.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [FeedComponent, RosterComponent, RaidComponent, ArticleWriterComponent],
  providers: [ArticleService, CharacterService, RaidService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  public user: User;

  constructor(private _userService: UserService) { }

  ngOnInit(){
      this._userService.getUser().then(
          user => this.user = user
      );
  }
}
