import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetUpdateFormComponent } from './tweet-update-form.component';

describe('TweetUpdateFormComponent', () => {
  let component: TweetUpdateFormComponent;
  let fixture: ComponentFixture<TweetUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
