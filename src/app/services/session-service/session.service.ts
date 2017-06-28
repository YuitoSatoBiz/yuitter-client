import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';

@Injectable()
export class SessionService {

  private headers = new Headers({
    'Content-Type': 'application/json',
  });
  private signInUrl = '/api/sign_in';
  private signOutUrl = '/api/sign_out';

  constructor(private http: Http, private router: Router) {
  }

  create(emailAddress: String, password: String): Promise<void> {
    return this.http
      .post(this.signInUrl, JSON.stringify(
        { emailAddress: emailAddress, password: password }),
        { headers: this.headers, withCredentials: true }
      )
      .toPromise()
      .then(response => {
        this.router.navigate(['/time-line']);
      })
  }

  remove(): Promise<void> {
    return this.http
      .get(this.signOutUrl,
        { withCredentials: true })
      .toPromise()
      .then(response => response.json())
  }
}
