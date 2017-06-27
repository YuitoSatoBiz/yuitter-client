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
  private membersUrl = '/api/members';
  private currentMemberUrl = '/api/members/current';

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http, private router: Router, private sessionService: SessionService) {
  }

  create(accountName: String, emailAddress: String, password: String): Promise<void> {
    return this.http
      .post(
        this.membersUrl,
        JSON.stringify({
          emailAddress: emailAddress,
          password: password,
          account: { accountName: accountName, avatar: 'hoge', backgroundImage: 'hogehoge' }
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
