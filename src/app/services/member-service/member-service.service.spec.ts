import { TestBed, inject } from '@angular/core/testing';

import { MemberServiceService } from './member-service.service';

describe('MemberServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberServiceService]
    });
  });

  it('should be created', inject([MemberServiceService], (service: MemberServiceService) => {
    expect(service).toBeTruthy();
  }));
});
