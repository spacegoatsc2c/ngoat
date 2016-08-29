import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';
import { DomSanitizationService } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor(private sanitizer: DomSanitizationService){ }

  ngOnInit() { }

  background(link: string){
      link = 'background-image:url(' + link + ')'
      return this.safecss(link);
  }

  youtube(link: string){
      link = 'https://www.youtube.com/embed/' + link;
      return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

  safecss(link: string){
      return this.sanitizer.bypassSecurityTrustStyle(link);
  }

  safeurl(link: string){
      return this.sanitizer.bypassSecurityTrustUrl(link);
  }
}
