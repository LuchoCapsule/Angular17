import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should multiply two numbers', () => {
    expect(service.multiply(2, 3)).toBe(6);
  });
  it('should multiply two numbers test 2', () => {
    expect(service.multiply(3, 3)).toBe(9);
  })
}
);

// // test 2
