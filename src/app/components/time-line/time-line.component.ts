import {Component, OnInit} from '@angular/core';
import {Account} from '../../classes/account'
import {MemberService} from '../../services/member-service/member.service';
import {Member} from 'app/classes/member';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  currentMember: Member;
  accounts: Account[];
  currentAccount: Account;

  constructor(private memberService: MemberService, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.getCurrentMember();
  }

  getCurrentMember(): void {
    this.memberService.findCurrent()
      .then(member => {
        this.currentMember = member;
        this.accounts = this.currentMember.accounts;
      });
  }

  onLinkClick($event: any): void {
    this.currentAccount = this.accounts[$event.index];
    this.cookieService.remove('accountId');
    this.cookieService.put('accountId', this.currentAccount.accountId.toString());
  }
}
