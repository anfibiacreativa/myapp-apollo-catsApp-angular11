import { TestBed } from '@angular/core/testing';

import { KittyService } from './kitty.service';

describe('KittyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KittyService = TestBed.get(KittyService);
    expect(service).toBeTruthy();
  });
});
