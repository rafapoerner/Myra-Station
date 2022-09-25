import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/identity/Employee';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.accountService.getEmployees().subscribe(
      response => this.employees = response
    );
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigate(['/login']);
  }

}
