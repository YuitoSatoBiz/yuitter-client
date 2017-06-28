import {Component, OnInit} from '@angular/core';
import {MemberService} from '../../services/member-service/member.service'

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  error: string;
  avatar: string;
  backgroundImage: string;

  constructor(private memberService: MemberService) {
  }

  ngOnInit() {
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

  private handleError(error: any): Promise<any> {
    this.error = JSON.parse(error._body)['error'];
    return Promise.reject(error.message || error);
  }
}
