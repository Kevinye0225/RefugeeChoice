/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { QuestionsService } from './questions.service';

describe('Service: Questions', () => {
  beforeEach(() => {
    addProviders([QuestionsService]);
  });

  it('should ...',
    inject([QuestionsService],
      (service: QuestionsService) => {
        expect(service).toBeTruthy();
      }));
});
