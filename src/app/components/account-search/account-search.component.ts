import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../services/account-service/account.service';
import {FormGroup} from '@angular/forms';
import {Account} from '../../classes/account';

@Component({
  selector: 'app-account-search',
  templateUrl: './account-search.component.html',
  styleUrls: ['./account-search.component.css']
})
export class AccountSearchComponent implements OnInit {

  accounts: Account[];

  static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private accountService: AccountService) {

  }

  ngOnInit() {
    this.accountService.list()
      .then(accounts =>
        this.accounts = accounts
      )
  }

  onSubmit(searchForm: FormGroup): void {
  }
}
