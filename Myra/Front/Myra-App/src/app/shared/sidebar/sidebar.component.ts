import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/identity/Employee';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  employees = {} as  Employee[];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getEmployees().subscribe(
      response => this.employees = response
    );
  }

}
