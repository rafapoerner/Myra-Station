import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UserComponent } from './views/user/user.component';
import { LoginComponent } from './views/user/login/login.component';
import { PerfilComponent } from './views/user/perfil/perfil.component';


const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: 'user/perfil', component: PerfilComponent
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
