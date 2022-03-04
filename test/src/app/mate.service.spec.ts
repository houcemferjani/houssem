import { TestBed } from '@angular/core/testing';

import { MateService } from './mate.service';

describe('MateService', () => {
  let service: MateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
