import { TestBed } from '@angular/core/testing';

import { Allproductserve } from './allproductserve';

describe('Allproductserve', () => {
  let service: Allproductserve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Allproductserve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
