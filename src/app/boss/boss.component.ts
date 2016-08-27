import { Component, OnInit, Input } from '@angular/core';
import { Boss } from '../raid';
import { ArticleService } from '../article.service';

@Component({
  moduleId: module.id,
  selector: 'app-boss',
  templateUrl: 'boss.component.html',
  styleUrls: ['boss.component.css']
})
export class BossComponent implements OnInit {
  @Input() boss: Boss;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {

  }

}
