import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private signInUrl = 'http://localhost:9000/api/sign_in';

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {
  }

  create(emailAddress: String, password: String): Promise<JSON> {
    return this.http
      // .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .post(this.signInUrl, JSON.stringify({emailAddress: emailAddress, password: password}), {headers: this.headers})
      .toPromise()
      .then(response =>
        response.json())
      .catch(SessionService.handleError)
  }
}
