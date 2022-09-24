import { Component, Input, OnInit } from '@angular/core';
import { Employee } from './../../models/identity/Employee';

@Component({
  selector: 'app-card-box-user',
  templateUrl: './card-box-user.component.html',
  styleUrls: ['./card-box-user.component.scss']
})
export class CardBoxUserComponent implements OnInit {

  @Input() employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
