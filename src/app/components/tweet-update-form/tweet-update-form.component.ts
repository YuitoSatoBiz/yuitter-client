import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {Tweet} from '../../classes/tweet';
import {FormGroup} from '@angular/forms';
import {TweetService} from '../../services/tweet-service/tweet.service';

@Component({
  selector: 'app-tweet-update-form',
  template: 'passed in {{data}}',
  templateUrl: './tweet-update-form.component.html',
  styleUrls: ['./tweet-update-form.component.css']
})
export class TweetUpdateFormComponent implements OnInit {

  tweet: Tweet;

  constructor(@Inject(MD_DIALOG_DATA) public data: Tweet,
              private tweetService: TweetService,
              private dialogRef: MdDialogRef<TweetUpdateFormComponent>) {
  }

  ngOnInit() {
    this.tweet = this.data;
  }

  onSubmit(tweetForm: FormGroup): void {
    this.tweetService.update(this.tweet, tweetForm.value.tweetText)
      .then(tweet => this.dialogRef.close(tweet));
  }
}
