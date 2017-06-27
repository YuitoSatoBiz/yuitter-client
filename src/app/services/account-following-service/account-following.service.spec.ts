import { TestBed, inject } from '@angular/core/testing';

import { AccountFollowingService } from './account-following.service';

describe('AccountFollowingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountFollowingService]
    });
  });

  it('should be created', inject([AccountFollowingService], (service: AccountFollowingService) => {
    expect(service).toBeTruthy();
  }));
});
