import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {Tweet} from '../../classes/tweet';
import {FormGroup} from '@angular/forms';
import {TweetService} from '../../services/tweet-service/tweet.service';

@Component({
  selector: 'app-tweet-update-form',
  templateUrl: './tweet-update-form.component.html',
  styleUrls: ['./tweet-update-form.component.css']
})
export class TweetUpdateFormComponent implements OnInit {

  tweet: Tweet;
  error: string;

  constructor(@Inject(MD_DIALOG_DATA) public data: Tweet,
              private tweetService: TweetService,
              private dialogRef: MdDialogRef<TweetUpdateFormComponent>) {
  }

  ngOnInit() {
    this.tweet = this.data;
  }

  onSubmit(tweetForm: FormGroup): void {
    if (!(tweetForm.value.tweetText.replace(/\s+/g, '').replace(/\r?\n/g, ''))) {
      this.error = '値が不正です。'
    } else {
      this.tweetService.update(this.tweet, tweetForm.value.tweetText)
        .then(tweet => this.dialogRef.close(tweet))
        .catch(e => this.handleError(e));
    }
  }

  private handleError(error: any): Promise<any> {
    this.error = JSON.parse(error._body)['error'];
    return Promise.reject(error.message || error);
  }
}
