import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session-service/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

  signOut(): void {
    this.sessionService.delete()
      .then(() => this.router.navigate(['/sign-in']))
  }
}
