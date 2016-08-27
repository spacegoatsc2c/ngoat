import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RaidService } from '../raid.service';
import { Boss } from '../raid';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'app-boss-home',
  templateUrl: 'boss-home.component.html',
  styleUrls: ['boss-home.component.css']
})
export class BossHomeComponent implements OnInit {
  private sub: Subscription;
  public boss: Boss;

  constructor(private raidService: RaidService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.raidService.getBoss(id).then(boss => this.boss = boss);
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
