import {Component, OnInit} from '@angular/core';
import {Account} from '../../classes/account'
import {MemberService} from '../../services/member-service/member.service';
import {Member} from 'app/classes/member';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  currentMember: Member;
  accounts: Account[];
  currentAccount: Account;

  constructor(private memberService: MemberService) {
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
}
