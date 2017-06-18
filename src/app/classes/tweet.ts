import {Account} from './account'
import DateTimeFormat = Intl.DateTimeFormat;

export class Tweet {
  tweetId: number;
  tweetText: string;
  registerDatetime: DateTimeFormat;
  versionNo: number;
  accounts: Account[];
}
