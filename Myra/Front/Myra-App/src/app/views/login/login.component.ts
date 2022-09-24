import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { stagger } from '@angular/animations';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/models/identity/User';
import { UserLogin } from 'src/app/models/identity/UserLogin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = {} as UserLogin;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { }

  public login(): void {
    this.accountService.login().subscribe(
      (response: User[]) => {
        const user = response.find(r => r.username === this.model.userName && r.password === this.model.password);
        if (user) {
          this.accountService.setCurrentUser(user);
          this.router.navigateByUrl('/dashboard');
          return;
        }
        this.toastr.error('Credenciais inválidas');
      },
      (error: any) => {
        if (error.status === 401) {
          this.toastr.error('Usuário ou senha inválidos');
          console.error(error);
        }
      },
    );
  }
}
