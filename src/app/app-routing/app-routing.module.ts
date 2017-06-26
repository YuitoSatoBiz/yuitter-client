import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimeLineComponent} from '../components/time-line/time-line.component';
import {SignInFormComponent} from '../components/sign-in-form/sign-in-form.component';
import {SignUpFormComponent} from '../components/sign-up-form/sign-up-form.component';
import {AccountDetailComponent} from '../components/account-detail/account-detail.component';
import {MemberDetailComponent} from "../components/member-detail/member-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/time-line', pathMatch: 'full' },
  { path: 'time-line', component: TimeLineComponent },
  { path: 'sign-in', component: SignInFormComponent },
  { path: 'sign-up', component: SignUpFormComponent },
  { path: 'account/:accountId', component: AccountDetailComponent },
  { path: 'my-page', component: MemberDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
