import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MemberService} from '../member-service/member.service';

@Injectable()
export class DataStoreService {

  private _signInFlg: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private memberService: MemberService) {
  }

  get signInFlg() {
    return this._signInFlg.asObservable();
  }

  setSignInFlg(bool: boolean) {
    this._signInFlg.next(bool);
  }

}
