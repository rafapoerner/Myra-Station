import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { CardBoxUserComponent } from './components/card-box-user/card-box-user.component';
import { LoginComponent } from './views/login/login.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { AccountService } from './services/account.service';
import { AuthGuardService } from './guards/auth-guard.service';

import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';



defineLocale('pt-br', ptBrLocale);
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    DateTimeFormatPipe,
    LoginComponent,
    SidebarComponent,
    CardBoxComponent,
    CardBoxUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true
    }),
    NgxSpinnerModule
  ],
  providers: [
    AccountService,
    AuthGuardService,
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
