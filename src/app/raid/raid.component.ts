import { Component, OnInit } from '@angular/core';
import { Raid, Boss } from '../raid';
import { RaidService } from '../raid.service';

@Component({
  moduleId: module.id,
  selector: 'app-raid',
  templateUrl: 'raid.component.html',
  styleUrls: ['raid.component.css']
})
export class RaidComponent implements OnInit {
  public raids:Raid[];
  public currentRaid:Raid;
  public bosses:Boss[];

  constructor(private raidService:RaidService) { }

  ngOnInit() {
    this.raidService.getRaids().then(
      raids => this.initRaids(raids)
    );
  }

  initRaids(raids:Raid[]){
    this.raids = raids;
    this.changeRaid(raids[0]);
  }

  changeRaid(raid:Raid){
    this.currentRaid = raid;
    this.raidService.getBosses(this.currentRaid).then(
      bosses => this.bosses = bosses
    );
  }

}
