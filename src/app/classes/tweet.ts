import {Account} from './account'
import DateTimeFormat = Intl.DateTimeFormat;

export class Tweet {
  tweetId: Number;
  tweetText: String;
  registerDatetime: DateTimeFormat;
  versionNo: Number;
  accounts: Account[]
}
