import { TestBed } from '@angular/core/testing';

import { TheservicesService } from './theservices.service';

describe('TheservicesService', () => {
  let service: TheservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
