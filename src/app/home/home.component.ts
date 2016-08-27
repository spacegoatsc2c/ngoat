import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ArticleService } from '../article.service';
import { RaidService } from '../raid.service';
import { FeedComponent } from '../feed/';
import { BossComponent } from '../boss/';
import { Article } from '../article';
import { Boss } from '../raid';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
  public current_articles: Article[];
  public current_boss: Boss;

  constructor(
    private userService: UserService,
    private raidService: RaidService,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getCurrent().then(
      articles => this.current_articles = articles
    );
    this.raidService.getCurrent().then(
      boss => this.current_boss = boss
    );
  }

}
