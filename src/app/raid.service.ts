import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Raid, Boss } from './raid.ts';

@Injectable()
export class RaidService {

  constructor(private http:Http) { }

  private raidUrl = 'api/raids/';

  getRaids(){
    return this.http.get(this.raidUrl)
         .toPromise()
         .then(response => response.json().results as Raid[])
         .catch(this.handleError);
  }


  private raidBossesUrl = 'api/raidbosses/';

  getBosses(raid: Raid){
    return this.http.get(this.raidBossesUrl + raid.id + '/')
         .toPromise()
         .then(response => response.json() as Boss[])
         .catch(this.handleError);
  }

  private currentBossUrl = 'api/current-boss/';

  getCurrent(){
    return this.http.get(this.currentBossUrl)
         .toPromise()
         .then(response => response.json() as Boss)
         .catch(this.handleError);
  }

  private bossUrl = 'api/bosses/';

  getBoss(id: number){
    return this.http.get(this.bossUrl + id + '/')
         .toPromise()
         .then(response => response.json() as Boss)
         .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('A raidservice error occurred', error);
    return Promise.reject(error.message || error);
  }

}
