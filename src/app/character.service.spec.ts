/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { CharacterService } from './character.service';

describe('Service: Character', () => {
  beforeEach(() => {
    addProviders([CharacterService]);
  });

  it('should exist and return characters',
    inject([CharacterService],
      (service: CharacterService) => {
        expect(service).toBeTruthy();
        expect(service.getCharacters()).toBeDefined();
      }));

});
