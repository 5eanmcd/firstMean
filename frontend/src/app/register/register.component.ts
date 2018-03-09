import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData = {}

  constructor( private authService: AuthService) {}

  ngOnInit() {
  }

  submit() {
    console.log(this.registerData)
    this.authService.registerUser(this.registerData)
  }
}
