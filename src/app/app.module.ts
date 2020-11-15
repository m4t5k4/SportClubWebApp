import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import  { MembersModule } from './members/members.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ObservableComponent } from './observable/observable.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FlexboxComponent } from './flexbox/flexbox.component';
import { BgridComponent } from './bgrid/bgrid.component';

import { TdFormsModule } from './td-forms/td-forms.module';
import { RxFormsModule } from './rx-forms/rx-forms.module';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObservableComponent,
    FlexboxComponent,
    BgridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MembersModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    TdFormsModule,
    RxFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
