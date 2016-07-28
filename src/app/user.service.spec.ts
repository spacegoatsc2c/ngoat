/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';

describe('Service: User', () => {
  beforeEach(() => {
    addProviders([UserService]);
  });

  it('should ...',
    inject([UserService],
      (service: UserService) => {
        expect(service).toBeTruthy();
      }));

  it('should return a user',
    inject([UserService],
      (service: UserService) => {
        let user = service.getUser();
        expect(user).toBeDefined();
    }));
});
