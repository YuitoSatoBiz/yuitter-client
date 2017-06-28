import {Component, OnInit} from '@angular/core';
import {MemberService} from '../../services/member-service/member.service'
import {Member} from '../../classes/member';
import {Account} from '../../classes/account';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  error: string;
  avatar: string;
  backgroundImage: string;
  member: Member;
  account: Account;

  constructor(private memberService: MemberService) {
  }

  ngOnInit() {
    this.member = new Member(null, null, null, null);
    this.account = new Account(null, null, null, null);
  }

  signUp(accountName: String, emailAddress: String, password: String): void {
    this.memberService.create(accountName, emailAddress, password, this.avatar, this.backgroundImage)
      .then(() => null)
      .catch(e => this.handleError(e))
  }

  avatarUploaded(event: any): void {
    this.avatar = event.file.name;
  }

  backgroundImageUploaded(event: any): void {
    this.backgroundImage = event.file.name;
  }

  private handleError(error: any): Promise<void> {
    return this.error = JSON.parse(error._body)['error'];
  }
}
