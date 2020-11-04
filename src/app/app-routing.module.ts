import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members/members.component';
import { ObservableComponent } from './observable/observable.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { BgridComponent } from './bgrid/bgrid.component';
import { TdFormComponent } from './td-forms/td-form/td-form.component';
import { RxFormComponent } from './rx-forms/rx-form/rx-form.component';

const routes: Routes = [
  { path: 'members', component: MembersComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'flexbox', component: FlexboxComponent },
  { path: 'bgrid', component: BgridComponent },
  { path: 'tdform', component: TdFormComponent },
  { path: 'rxform', component: RxFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
