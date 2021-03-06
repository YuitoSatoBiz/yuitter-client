import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Tweet} from '../../classes/tweet';

@Injectable()
export class TweetService {

  private tweetsUrl = '/api/tweets';
  private headers = new Headers({
    'Content-Type': 'application/json',
  });

  constructor(private http: Http) {
  }

  list(accountId: number): Promise<Tweet[]> {
    return this.http.get(this.tweetsUrl + '/' + accountId, { withCredentials: true })
      .toPromise()
      .then(response =>
        response.json() as Tweet[]);
  }

  searchByAccountId(accountId: number): Promise<Tweet[]> {
    return this.http.get(this.tweetsUrl + '/search/' + accountId, {withCredentials: true})
      .toPromise()
      .then(response =>
        response.json() as Tweet[]);
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
        response.json() as Tweet);
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
        response.json() as Tweet);
  }

  remove(tweetId: number): Promise<void> {
    return this.http
      .delete(
        this.tweetsUrl + '/' + tweetId,
        {withCredentials: true})
      .toPromise()
      .then(response => response.json());
  }
}
