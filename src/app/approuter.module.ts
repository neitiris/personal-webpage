import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as pages from './pages/';

const appRoutes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'landing', component: pages.LandingPageComponent},
  // { path: 'admin', component: pages.AdmincoverComponent,
  //   children: [
  //     {path: '', component: pages.},
  //   ]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class ApproutingModule {

}
