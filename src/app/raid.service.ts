import { Injectable } from '@angular/core';
import { Raid, Boss } from './raid.ts';
import { RAIDS, BOSSES } from './mock-raid';

@Injectable()
export class RaidService {

  constructor() { }

  getRaids(){
      return Promise.resolve(RAIDS);
  }

  getBosses(raid: Raid){
      return Promise.resolve(BOSSES);
  }

}
