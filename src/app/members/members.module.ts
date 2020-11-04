import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members/members.component';
import { MemberService } from './member.service';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MemberFormComponent } from './member-form/member-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [MembersComponent, MemberDetailComponent, MemberFormComponent],
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerModule],
  providers: [
    MemberService,
    { provide: MAT_DATE_LOCALE, useValue: 'nl-BE'}
  ],
  exports: [MembersComponent]
})
export class MembersModule { }
