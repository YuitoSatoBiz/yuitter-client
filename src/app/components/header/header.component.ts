import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../services/session-service/session.service';
import {Router} from '@angular/router';
import {MemberService} from "app/services/member-service/member.service";
import {Member} from '../../classes/member';
import {DataStoreService} from '../../services/data-store-service/data-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  signInFlg: boolean;

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
        this.router.navigate(['/sign-in'])
      })
  }

  private setSignInFlg() {
    this.memberService.findCurrent()
      .then(() => {
        this.dataStoreService.setSignInFlg(true);
      }).catch(() =>
      this.dataStoreService.setSignInFlg(false));
  }
}
