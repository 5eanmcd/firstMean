import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { User } from '../model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  users: User[] 

  ngOnInit() {
    console.log('calling getUsers()')
    // this.apiService.getUsers();
    this.apiService.getUsersNew().subscribe(
      res => this.users = res)}

}
