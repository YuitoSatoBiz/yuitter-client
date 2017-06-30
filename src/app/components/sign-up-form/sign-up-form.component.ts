import {Component, OnInit} from '@angular/core';
import {MemberService} from '../../services/member-service/member.service'
import {Member} from '../../classes/member';
import {Account} from '../../classes/account';
import {DataStoreService} from '../../services/data-store-service/data-store.service';

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

  constructor(private memberService: MemberService, private dataStoreService: DataStoreService) {
  }

  ngOnInit() {
    this.member = new Member(null, null, null, null);
    this.account = new Account(null, null, null, null);
  }

  signUp(accountName: String, emailAddress: String, password: String): void {
    accountName = accountName.replace(/\s+/g, '').replace(/\r?\n/g, '');
    emailAddress = emailAddress.replace(/\s+/g, '').replace(/\r?\n/g, '');
    password = password.replace(/\s+/g, '').replace(/\r?\n/g, '');
    if (!accountName || !emailAddress || !password) {
      this.error = '値が不正です。'
    } else {
      this.memberService.create(accountName, emailAddress, password, this.avatar, this.backgroundImage)
        .then(() => this.dataStoreService.setSignInFlg(true))
        .catch(e => this.handleError(e))
    }
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
