import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Account} from '../../classes/account';

@Injectable()
export class AccountService {

  private headers = new Headers({
    'Content-Type': 'application/json',
  });
  private accountsUrl = 'http://localhost:9000/api/accounts';

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {
  }

  find(accountId: number): Promise<Account> {
    return this.http.get(this.accountsUrl + '/' + accountId, { withCredentials: true })
      .toPromise()
      .then(response => {
        return response.json() as Account;
      })
      .catch(AccountService.handleError);
  }

  listFollowers(accountId: number): Promise<Account[]> {
    return this.http.get(this.accountsUrl + '/followers/' + accountId, { withCredentials: true })
      .toPromise()
      .then(response => {
        return response.json() as Account[];
      })
      .catch(AccountService.handleError);
  }

  listFollowees(accountId: number): Promise<Account[]> {
    return this.http.get(this.accountsUrl + '/followees/' + accountId, { withCredentials: true })
      .toPromise()
      .then(response => {
        return response.json() as Account[];
      })
      .catch(AccountService.handleError);
  }

  create(accountName: String): Promise<Account> {
    return this.http
      .post(
        this.accountsUrl,
        JSON.stringify({
          accountName: accountName
        }),
        { headers: this.headers, withCredentials: true })
      .toPromise()
      .then(account => account.json() as Account)
      .catch(AccountService.handleError);
  }
}
