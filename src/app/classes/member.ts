import {Account} from './account'

export class Member {
  memberId: number;
  emailAddress: string;
  password: string;
  accounts: Account[];
}
