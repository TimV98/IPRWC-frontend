import { TestBed } from '@angular/core/testing';

import { ShopppingCartService } from '../services/shoppping-cart.service';

describe('ShopppingCartService', () => {
  let service: ShopppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopppingCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
