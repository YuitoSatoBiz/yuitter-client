import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {Account} from '../../classes/account';
import {TweetService} from '../../services/tweet-service/tweet.service'

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css']
})
export class TweetFormComponent implements OnInit {

  @Input() account: Account;
  @Input() accounts: Account[];
  accountIds: number[];
  tweetForm: FormGroup;

  constructor(private tweetService: TweetService) {
  }

  ngOnInit() {
    this.accountIds = this.accounts.map(a => a.accountId)
  }

  onSubmit(tweetForm: FormGroup): void {
    this.tweetService.create(tweetForm.value.tweetText, tweetForm.value.accountIds)
      .then(tweet => console.log(tweet));
    // ここからリクエストおくる
  }
}
