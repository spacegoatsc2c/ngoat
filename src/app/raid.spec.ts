/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {Raid, Boss} from './raid';

describe('Raid', () => {
  it('should create an instance', () => {
    expect(new Raid()).toBeTruthy();
  });
});

describe('Boss', () => {
  it('should create an instance', () => {
    expect(new Boss()).toBeTruthy();
  });
});
