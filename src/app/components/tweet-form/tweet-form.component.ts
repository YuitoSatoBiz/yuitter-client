import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css']
})
export class TweetFormComponent implements OnInit {

  tweetForm: FormGroup;

  constructor(private fb: FormBuilder,) {
    this.createForm();
  }

  ngOnInit() {
  }

  onSubmit(tweetForm: FormGroup): void {
    console.log(tweetForm.value);
  }

  private createForm(): void {
    this.tweetForm = this.fb.group({
      tweetText: '',
      accounts: this.fb.array([])
    });
  }
}
