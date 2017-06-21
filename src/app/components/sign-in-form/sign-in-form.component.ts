import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../services/session-service/session.service'

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  error: String;

  constructor(private sessionService: SessionService) {
  }

  signIn(emailAddress: String, password: String): void {
    this.sessionService.create(emailAddress, password)
      .then(() => null)
      .catch(e => this.handleError(e));
  }

  private handleError(error: any): Promise<any> {
    this.error = JSON.parse(error._body)['error'];
    return Promise.reject(error.message || error);
  }


  ngOnInit() {
  }

}
