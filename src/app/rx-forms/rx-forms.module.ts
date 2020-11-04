import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxFormComponent } from './rx-form/rx-form.component';
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [RxFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class RxFormsModule { }
