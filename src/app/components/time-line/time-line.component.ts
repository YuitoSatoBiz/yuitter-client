import {Component, OnInit} from '@angular/core';
import {Account} from '../../classes/account'
import {MemberService} from '../../services/member-service/member.service';
import {Member} from 'app/classes/member';
import {CookieService} from 'angular2-cookie/core';
import {DataStoreService} from '../../services/data-store-service/data-store.service';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  currentMember: Member;
  accounts: Account[];
  currentAccount: Account;
  currentAccountIds: number[];

  constructor(private memberService: MemberService, private cookieService: CookieService, private dataStoreService: DataStoreService) {
  }

  ngOnInit() {
    this.getCurrentMember();
  }

  getCurrentMember(): void {
    this.memberService.findCurrent()
      .then(member => {
        this.currentMember = member;
        this.accounts = this.currentMember.accounts;
        this.dataStoreService.setCurrentAccount(this.accounts[0]);
        this.dataStoreService.currentAccount.subscribe(account => this.currentAccount = account);
        this.currentAccountIds = this.currentMember.accounts.map(account => account.accountId);
        this.cookieService.remove('accountId');
        this.cookieService.put('accountId', this.currentAccount.accountId.toString());
      });
  }

  onLinkClick($event: any): void {
    this.dataStoreService.setCurrentAccount(this.accounts[$event.index]);
    this.dataStoreService.currentAccount.subscribe(account => this.currentAccount = account);
    this.cookieService.remove('accountId');
    this.cookieService.put('accountId', this.currentAccount.accountId.toString());
  }
}
