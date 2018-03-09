import { Injectable } from '@angular/core'
// import { Http } from '@angular/http'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AuthService {

    path = 'http://localhost:3000/auth'
    constructor( private http: HttpClient ) { }

    registerUser(userData) {
        console.log('sendUserRegistration()');
        this.http.post(this.path + '/register', userData).subscribe(res => {
            console.log(res);
        })
}

loginUser(userData) {
    console.log('loginUser()');
    //lose typesafety here with any
    this.http.post<any>(this.path + '/login', userData).subscribe(res => {
        console.log(res);
        localStorage.setItem('token', res.token)
    })
}
}
