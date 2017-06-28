import {Account} from './account'
import DateTimeFormat = Intl.DateTimeFormat;

export class Tweet {
  constructor(public tweetId: number,
              public tweetText: string,
              public registerDatetime: DateTimeFormat,
              public versionNo: number,
              public accounts: Account[]) {
  }
}
