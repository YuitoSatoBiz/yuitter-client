import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Tweet} from '../../classes/tweet';

@Injectable()
export class TweetService {

  private tweetsUrl = 'http://localhost:9000/api/tweets';

  constructor(private http: Http) {
  }

  getTweets(): Promise<Tweet[]> {
    return this.http.get(this.tweetsUrl)
      .toPromise()
      .then(response =>
        response.json() as Tweet[]
      )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
