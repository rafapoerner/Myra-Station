import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from './../../environments/environment';
import { map, take } from 'rxjs/operators';
import { User } from '../models/identity/User';

@Injectable()
export class AccountService {
  private currentUserSource = new ReplaySubject<User>(1); // Essa variável recebe diversas atualizações
  currentUser$ = this.currentUserSource.asObservable(); // $ -> (usado pra diferenciar quando ela é um observable ou subject)
                                                        // Ela fica responsável por não atualizar a cada chamada, somente quando necessário.

  baseURL = environment.apiURL + 'api/account/';
constructor(private http: HttpClient) { }

  public login(model: any): Observable<void> {
    return this.http.post<User>(this.baseURL + 'login', model).pipe(
      take(1),
      map((response: User) => {
        const user = response;
        if (user) {
          this.setCurrentUser(user);
        }
      }
    ));
  }

  public register(model: any): Observable<void> {
    return this.http.post<User>(this.baseURL + 'register', model).pipe(
      take(1),
      map((response: User) => {
        const user = response;
        if (user) {
          this.setCurrentUser(user);
        }
      }
    ));
  }

  logout(): void {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.currentUserSource.complete();
  }

  public setCurrentUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

}
