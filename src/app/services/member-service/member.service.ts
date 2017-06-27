import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {SessionService} from '../session-service/session.service';
import {Member} from '../../classes/member';

@Injectable()
export class MemberService {

  private headers = new Headers({
    'Content-Type': 'application/json',
  });
  private assetsUrl = 'http://localhost:9000/assets/images/';
  private membersUrl = 'http://localhost:9000/api/members';
  private currentMemberUrl = 'http://localhost:9000/api/members/current';

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

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
      ).catch(MemberService.handleError)
  }

  findCurrent(): Promise<Member> {
    return this.http
      .get(this.currentMemberUrl, {withCredentials: true})
      .toPromise()
      .then(response =>
        response.json() as Member
      ).catch( e => {
        MemberService.handleError(e);
        this.router.navigate(['/sign-in']);
      })
  }
}
