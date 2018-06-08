import { TestBed, inject } from '@angular/core/testing';

import { RmsService } from './rms.service';

describe('RmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RmsService]
    });
  });

  it('should be created', inject([RmsService], (service: RmsService) => {
    expect(service).toBeTruthy();
  }));
});
