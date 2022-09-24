import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from './../../environments/environment';
import { User } from '../models/identity/User';
import { Employee } from './../models/identity/Employee';

@Injectable()
export class AccountService {
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

constructor(private http: HttpClient) { }

  public login(): Observable<User[]> {
    return this.http.get<User[]>(environment.host + environment.login);
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

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(environment.host + environment.employee);
  }

}
