import {Account} from './account'

export class Member {
  constructor(public memberId: number,
              public emailAddress: string,
              public password: string,
              public accounts: Account[]) {}
}
