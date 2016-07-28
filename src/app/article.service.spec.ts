/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ArticleService } from './article.service';

describe('Service: Article', () => {
  beforeEach(() => {
    addProviders([ArticleService]);
  });

  it('should ...',
    inject([ArticleService],
      (service: ArticleService) => {
        expect(service).toBeTruthy();
      }));
});
