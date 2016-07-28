/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { RaidService } from './raid.service';

describe('Service: Raid', () => {
  beforeEach(() => {
    addProviders([RaidService]);
  });

  it('should ...',
    inject([RaidService],
      (service: RaidService) => {
        expect(service).toBeTruthy();
      }));
});
