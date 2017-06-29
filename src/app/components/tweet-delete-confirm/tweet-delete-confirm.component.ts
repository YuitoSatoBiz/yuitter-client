import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {Tweet} from '../../classes/tweet';
import {TweetService} from '../../services/tweet-service/tweet.service';

@Component({
  selector: 'app-tweet-delete-confirm',
  templateUrl: './tweet-delete-confirm.component.html',
  styleUrls: ['./tweet-delete-confirm.component.css']
})
export class TweetDeleteConfirmComponent implements OnInit {

  tweet: Tweet;
  error: string;

  constructor(@Inject(MD_DIALOG_DATA) public data: Tweet,
              private tweetService: TweetService,
              private dialogRef: MdDialogRef<TweetDeleteConfirmComponent>) {
  }

  ngOnInit() {
    this.tweet = this.data;
  }

  accept(): void {
    this.tweetService.remove(this.tweet.tweetId)
      .then(result => this.dialogRef.close(result))
      .catch(e => this.handleError(e));
  }

  cancel(): void {
    this.dialogRef.close();
  }

  private handleError(error: any): Promise<any> {
    this.error = JSON.parse(error._body)['error'];
    return Promise.reject(error.message || error);
  }
}
