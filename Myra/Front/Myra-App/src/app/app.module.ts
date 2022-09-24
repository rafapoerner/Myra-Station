import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';


import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { NavComponent } from './shared/nav/nav.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { CardBoxComponent } from './shared/card-box/card-box.component';
import { CardBoxUserComponent } from './shared/card-box-user/card-box-user.component';

import { AccountService } from './services/account.service';

import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';

import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

defineLocale('pt-br', ptBrLocale);
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PerfilComponent,
    NavComponent,
    TituloComponent,
    DateTimeFormatPipe,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
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
    // EventoService,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
