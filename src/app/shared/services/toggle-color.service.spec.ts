import { TestBed } from '@angular/core/testing';

import { ToggleColorService } from './toggle-color.service';

describe('ToggleColorService', () => {
  let service: ToggleColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
