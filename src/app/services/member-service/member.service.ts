import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {SessionService} from '../session-service/session.service';
import {Member} from '../../classes/member';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class MemberService {

  private headers = new Headers({
    'Content-Type': 'application/json',
  });
  private assetsUrl = '/api/assets/images/';
  private membersUrl = '/api/members';
  private currentMemberUrl = '/api/members/current';
  private _signInFlg: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _num: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor(private http: Http, private router: Router, private sessionService: SessionService) {
  }

  create(accountName: String, emailAddress: String, password: String, avatar: string, backgroundImage: string): Promise<void> {
    let avatarPath: string;
    if (avatar != null) {
      avatarPath = this.assetsUrl + avatar;
    }
    let backgroundImagePath: string;
    if (backgroundImage != null) {
      backgroundImagePath = this.assetsUrl + backgroundImage;
    }
    return this.http
      .post(
        this.membersUrl,
        JSON.stringify({
          emailAddress: emailAddress,
          password: password,
          account: { accountName: accountName, avatar: avatarPath, backgroundImage: backgroundImagePath }
        }),
        { headers: this.headers })
      .toPromise()
      .then(response =>
        this.sessionService.create(emailAddress, password)
      );
  }

  findCurrent(): Promise<Member> {
    return this.http
      .get(this.currentMemberUrl, { withCredentials: true })
      .toPromise()
      .then(response => {
        return response.json() as Member;
      }).catch(e =>
        this.router.navigate(['/sign-in'])
      )
  }

  get signInFlg() {
    return this._signInFlg.asObservable();
  }

  setSignInFlg(bool: boolean) {
    this._signInFlg.next(bool);
  }
}
