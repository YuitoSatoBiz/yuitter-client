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
        console.log(member.accounts);
      });
  }

  onClick(account: Account): void {
    this.currentAccount = account;
    this.cookieService.remove('accountId');
    console.log(this.cookieService.getObject('accountId'));
    console.log(this.cookieService.getAll());
    console.log(this.cookieService.get('PLAY_SESSION'));
    this.cookieService.put('accountId', account.accountId.toString());
    console.log(this.cookieService.get('accountId'));
  }
}
