import { TestBed } from '@angular/core/testing';

import { VisorService } from './visor.service';

describe('VisorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisorService = TestBed.get(VisorService);
    expect(service).toBeTruthy();
  });
});
