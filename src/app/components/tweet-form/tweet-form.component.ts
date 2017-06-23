import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {Account} from '../../classes/account';

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

  constructor() {
  }

  ngOnInit() {
    this.accountIds = this.accounts.map(a => a.accountId)
  }

  onSubmit(tweetForm: FormGroup): void {
    console.log(tweetForm.value);
  }
}
