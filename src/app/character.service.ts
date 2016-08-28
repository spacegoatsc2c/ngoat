import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Character } from './character';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CharacterService {

  constructor(private http:Http) { }

  private characterUrl = 'api/characters/';

  getCharacters(){
      return this.http.get(this.characterUrl)
           .toPromise()
           .then(response => response.json().results as Character[])
           .catch(this.handleError);
  }

  getCharacter(id: number){
    return this.http.get(this.characterUrl + id + '/')
      .toPromise()
      .then(response => response.json() as Character)
      .catch(this.handleError);
  }


  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
