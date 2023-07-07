import { TestBed } from '@angular/core/testing';

import { BookingListService } from './booking-list.service';

describe('BookingListService', () => {
  let service: BookingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
