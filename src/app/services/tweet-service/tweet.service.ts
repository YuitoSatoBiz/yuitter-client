import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Tweet} from '../../classes/tweet';
import {toPromise} from "rxjs/operator/toPromise";

@Injectable()
export class TweetService {

  private tweetsUrl = 'http://localhost:9000/api/tweets';
  private headers = new Headers({
    'Content-Type': 'application/json',
  });

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {
  }

  list(accountId: number): Promise<Tweet[]> {
    return this.http.get(this.tweetsUrl + '/' + accountId, { withCredentials: true })
      .toPromise()
      .then(response =>
        response.json() as Tweet[]
      )
      .catch(TweetService.handleError);
  }

  create(tweetText: string, accountIds: number[]): Promise<Tweet> {
    return this.http
      .post(
        this.tweetsUrl,
        JSON.stringify({
          tweetText: tweetText,
          accountIds: accountIds
        }),
        { headers: this.headers, withCredentials: true })
      .toPromise()
      .then(response =>
        response.json() as Tweet)
      .catch(TweetService.handleError)
  }

  update(tweet: Tweet, tweetText: string): Promise<Tweet> {
    return this.http
      .put(
        this.tweetsUrl + '/' + tweet.tweetId,
        JSON.stringify({
          tweetText: tweetText,
          versionNo: tweet.versionNo
        }),
        { headers: this.headers, withCredentials: true })
      .toPromise()
      .then(response =>
        response.json() as Tweet)
      .catch(TweetService.handleError)
  }
}
