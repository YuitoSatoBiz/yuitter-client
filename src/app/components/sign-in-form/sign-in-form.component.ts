import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../services/session-service/session.service'
import {Member} from '../../classes/member';
import {MemberService} from '../../services/member-service/member.service';
import {DataStoreService} from '../../services/data-store-service/data-store.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  error: String;
  member: Member;

  constructor(private dataStoreService: DataStoreService, private sessionService: SessionService, private memberService: MemberService) {
  }

  ngOnInit() {
    this.member = new Member(null, null, null, null)
  }

  signIn(emailAddress: String, password: String): void {
    this.sessionService.create(emailAddress, password)
      .then(() => {
        this.dataStoreService.setSignInFlg(true);
      })
      .catch(e => this.handleError(e));
  }

  private handleError(error: any): Promise<void> {
    return this.error = JSON.parse(error._body)['error'];
  }
}
