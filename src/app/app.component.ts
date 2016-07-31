import { Component } from '@angular/core';
import { ArticleService } from './article.service';
import { FeedComponent } from './feed/feed.component';
import { RosterComponent } from './roster/roster.component';
import { CharacterService } from './character.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [FeedComponent, RosterComponent],
  providers: [ArticleService, CharacterService]
})
export class AppComponent {
  title = 'app works!';
}
