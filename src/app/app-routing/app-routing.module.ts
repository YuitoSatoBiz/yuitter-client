import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimeLineComponent} from '../components/time-line/time-line.component';
import {SignInFormComponent} from '../components/sign-in-form/sign-in-form.component';
import {SignUpFormComponent} from "../components/sign-up-form/sign-up-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/time-line', pathMatch: 'full' },
  { path: 'time-line', component: TimeLineComponent },
  { path: 'sign-in', component: SignInFormComponent },
  { path: 'sign-up', component: SignUpFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
