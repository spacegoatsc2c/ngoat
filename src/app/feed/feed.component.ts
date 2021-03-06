import { Input, Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  moduleId: module.id,
  selector: 'app-feed',
  templateUrl: 'feed.component.html',
  styleUrls: ['feed.component.css'],
  directives: [ArticleComponent]
})
export class FeedComponent implements OnInit {
  @Input() public articles:Article[];

  constructor() { }

  ngOnInit() { }

}
