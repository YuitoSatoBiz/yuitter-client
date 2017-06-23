import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetDeleteConfirmComponent } from './tweet-delete-confirm.component';

describe('TweetDeleteConfirmComponent', () => {
  let component: TweetDeleteConfirmComponent;
  let fixture: ComponentFixture<TweetDeleteConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetDeleteConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
