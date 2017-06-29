import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../services/session-service/session.service';
import {Router} from '@angular/router';
import {MemberService} from 'app/services/member-service/member.service';
import {Member} from '../../classes/member';
import {Account} from '../../classes/account';

import {DataStoreService} from '../../services/data-store-service/data-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  signInFlg: boolean;
  currentAccount: Account;

  constructor(private dataStoreService: DataStoreService,
              private sessionService: SessionService,
              private router: Router,
              private memberService: MemberService) {
  }

  ngOnInit() {
    this.dataStoreService.signInFlg.subscribe(flg => this.signInFlg = flg);
    this.setSignInFlg();
  }

  signOut(): void {
    this.sessionService.remove()
      .then(() => {
        this.signInFlg = false;
        this.router.navigate(['/sign-in']);
      })
  }

  private setSignInFlg() {
    this.memberService.findCurrent()
      .then(member => {
        this.dataStoreService.setSignInFlg(true);
        this.dataStoreService.setCurrentAccount(member.accounts[0]);
        this.dataStoreService.currentAccount.subscribe(account => this.currentAccount = account)
      }).catch(() =>
      this.dataStoreService.setSignInFlg(false));
  }
}
