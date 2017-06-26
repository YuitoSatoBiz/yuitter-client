import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Account} from '../../classes/account';

@Injectable()
export class AccountFollowingService {

  private headers = new Headers({
    'Content-Type': 'application/json',
  });
  private accountFollowingsUrl = 'http://localhost:9000/api/account_followings';

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {
  }

  find(followeeId: number): Promise<boolean> {
    return this.http.get(this.accountFollowingsUrl + '/' + followeeId, { withCredentials: true})
      .toPromise()
      .then(response => response.json()['result'])
      .catch(AccountFollowingService.handleError)
  }

}
