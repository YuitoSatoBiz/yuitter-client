import {Component, OnInit} from '@angular/core';
import {MemberService} from '../../services/member-service/member-service.service'

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  error: String;

  constructor(private memberService: MemberService) {
  }

  ngOnInit() {
  }

  signUp(accountName: String, emailAddress: String, password: String, avatar: String, backgroundImage: String): void {
    this.memberService.create(accountName, emailAddress, password)
      .then(() => null)
      .catch(e => this.handleError(e))
  }

  private handleError(error: any): Promise<any> {
    this.error = JSON.parse(error._body)['error'];
    return Promise.reject(error.message || error);
  }
}
