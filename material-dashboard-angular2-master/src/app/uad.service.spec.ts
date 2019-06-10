import { TestBed } from '@angular/core/testing';

import { UadService } from './uad.service';

describe('UadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UadService = TestBed.get(UadService);
    expect(service).toBeTruthy();
  });
});
