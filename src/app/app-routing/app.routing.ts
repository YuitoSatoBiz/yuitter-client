import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimeLineComponent} from '../time-line/time-line.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/time-line', pathMatch: 'full' },
  { path: 'time-line', component: TimeLineComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
