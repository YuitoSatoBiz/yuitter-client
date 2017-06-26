import {Component, OnInit} from '@angular/core';
import {Member} from '../../classes/member';
import {Account} from '../../classes/account';
import {CookieService} from 'angular2-cookie/core';
import {MemberService} from '../../services/member-service/member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

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
