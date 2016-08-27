import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ArticleService } from '../article.service';
import { RaidService } from '../raid.service';
import { FeedComponent } from '../feed/';
import { BossComponent } from '../boss/';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService,
    private raidService: RaidService,
    private articleService: ArticleService) { }

  ngOnInit() {
  }

}
