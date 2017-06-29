import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MemberService} from '../member-service/member.service';
import {Account} from '../../classes/account';
import {CookieService} from 'angular2-cookie/core';
import {AccountService} from '../account-service/account.service';

@Injectable()
export class DataStoreService {

  private _signInFlg: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _currentAccount: BehaviorSubject<Account> = new BehaviorSubject(new Account(null, null, null, null));

  constructor(private memberService: MemberService,
              private cookieService: CookieService,
              private accountService: AccountService) {
  }

  get signInFlg() {
    return this._signInFlg.asObservable();
  }

  setSignInFlg(bool: boolean) {
    this._signInFlg.next(bool);
  }

  get currentAccount() {
    return this._currentAccount.asObservable();
  }

  setCurrentAccount(account: Account) {
    this._currentAccount.next(account);
  }
}
