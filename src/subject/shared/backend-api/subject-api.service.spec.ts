import { TestBed } from '@angular/core/testing';

import { SubjectApi } from './subject-api.service';

describe('SubjectApi', () => {
  let service: SubjectApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
