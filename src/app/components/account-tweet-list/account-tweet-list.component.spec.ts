import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTweetListComponent } from './account-tweet-list.component';

describe('AccountTweetListComponent', () => {
  let component: AccountTweetListComponent;
  let fixture: ComponentFixture<AccountTweetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTweetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTweetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
