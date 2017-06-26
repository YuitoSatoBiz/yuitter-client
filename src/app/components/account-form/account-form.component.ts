import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AccountService} from '../../services/account-service/account.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  onSubmit(accountForm: FormGroup) {
  }

}
j
