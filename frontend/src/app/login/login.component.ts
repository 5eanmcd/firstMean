import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {}

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submit(){
    console.log(this.loginData)
    this.authService.loginUser(this.loginData)
  }
}
