import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Raid, Boss } from './raid.ts';

@Injectable()
export class RaidService {

  constructor(private http:Http) { }

  private raidUrl = 'app/raids';

  getRaids(){
    return this.http.get(this.raidUrl)
         .toPromise()
         .then(response => response.json().data as Raid[])
         .catch(this.handleError);
  }


  private bossUrl = 'app/bosses';

  getBosses(raid: Raid){
    return this.http.get(this.bossUrl)
         .toPromise()
         .then(response => response.json().data as Boss[])
         .catch(this.handleError);
  }

  private currentBossUrl = 'api/current-boss';

  getCurrent(){
    return this.http.get(this.currentBossUrl)
         .toPromise()
         .then(response => response.json().data as Boss)
         .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
