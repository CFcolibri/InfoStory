import { TestBed } from '@angular/core/testing';

import { DataOverdoseService } from './data-overdose.service';

describe('DataOverdoseService', () => {
  let service: DataOverdoseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataOverdoseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
