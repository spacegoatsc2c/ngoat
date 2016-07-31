import { Component } from '@angular/core';
import { ArticleService } from './article.service';
import { FeedComponent } from './feed/feed.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [FeedComponent],
  providers: [ArticleService]
})
export class AppComponent {
  title = 'app works!';
}
