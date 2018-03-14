import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log('calling getUsers()')
    this.apiService.getUsers();
  }

}
