import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimeLineComponent} from '../time-line/time-line.component';

const routes: Routes = [
  { path: '', redirectTo: '/time-line', pathMatch: 'full' },
  { path: 'time-line', component: TimeLineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
