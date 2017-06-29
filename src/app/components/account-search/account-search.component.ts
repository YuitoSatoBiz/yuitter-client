import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../services/account-service/account.service';
import {FormGroup} from '@angular/forms';
import {Account} from '../../classes/account';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-search',
  templateUrl: './account-search.component.html',
  styleUrls: ['./account-search.component.css']
})
export class AccountSearchComponent implements OnInit {

  accounts: Account[];

  constructor(private accountService: AccountService, private router: Router) {

  }

  ngOnInit() {
    this.accountService.list()
      .then(accounts =>
        this.accounts = accounts)
      .catch(e => this.handleError(e));
  }

  onSubmit(searchForm: FormGroup): void {
  }

  onKey(event: any): void {
    this.accountService.search(event.target.value)
      .then(accounts => {
        this.accounts = accounts;
      })
  }

  private handleError(error: any) {
    this.router.navigate(['/sign-in'])
  }
}
