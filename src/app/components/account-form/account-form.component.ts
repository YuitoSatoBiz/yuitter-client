import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AccountService} from '../../services/account-service/account.service';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  error: string;
  avatar: string;
  backgroundImage: string;

  constructor(private accountService: AccountService, private dialogRef: MdDialogRef<AccountFormComponent>) {
  }

  ngOnInit() {
  }

  onSubmit(accountForm: FormGroup) {
    this.accountService.create(accountForm.value.accountName, this.avatar, this.backgroundImage)
      .then(account => this.dialogRef.close(account))
      .catch(e => this.handleError(e));
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
