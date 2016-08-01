import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  moduleId: module.id,
  selector: 'app-article-writer',
  templateUrl: 'article-writer.component.html',
  styleUrls: ['article-writer.component.css']
})
export class ArticleWriterComponent implements OnInit {

  constructor(private _articleService: ArticleService) { }

  ngOnInit() {
  }

}
