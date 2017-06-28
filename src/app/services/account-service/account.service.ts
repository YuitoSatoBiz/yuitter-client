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
  private assetsUrl = 'http://localhost:9000/assets/images/';

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {
  }

  list(): Promise<Account[]> {
    return this.http.get(this.accountsUrl, { withCredentials: true })
      .toPromise()
      .then(response => response.json() as Account[])
      .catch(AccountService.handleError)
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

  create(accountName: string, avatar: string, backgroundImage: string): Promise<Account> {
    let avatarPath: string;
    if (avatar != null) {
      avatarPath = this.assetsUrl + avatar;
    }
    let backgroundImagePath: string;
    if (backgroundImage != null) {
      backgroundImagePath = this.assetsUrl + backgroundImage;
    }
    return this.http
      .post(
        this.accountsUrl,
        JSON.stringify({
          accountName: accountName,
          avatar: avatarPath,
          backgroundImage: backgroundImagePath
        }),
        { headers: this.headers, withCredentials: true })
      .toPromise()
      .then(account => account.json() as Account)
      .catch(AccountService.handleError);
  }

  search(keyword: string): Promise<Account[]> {
    return this.http
      .post(
        this.accountsUrl + '/search',
        JSON.stringify({
          keyword: keyword
        }),
        { headers: this.headers, withCredentials: true })
      .toPromise()
      .then(response => response.json() as Account[])
      .catch(AccountService.handleError);
  }
}
