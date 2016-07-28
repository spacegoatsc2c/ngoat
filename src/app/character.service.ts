import { Injectable } from '@angular/core';
import { Character } from './character';
import { CHARACTERS } from './mock-characters'

@Injectable()
export class CharacterService {

  constructor() { }

  getCharacters(){
      return Promise.resolve(CHARACTERS);
  }

}
