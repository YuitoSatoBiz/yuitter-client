import { Injectable } from '@angular/core';

@Injectable()
export class TweetService {

  constructor() { }

  getTweets(): Promise<String> {
    return Promise.resolve('ツイート');
  }
}
