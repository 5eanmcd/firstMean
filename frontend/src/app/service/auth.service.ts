import { Injectable } from '@angular/core'
// import { Http } from '@angular/http'
import { HttpClient } from '@angular/common/http'

import { environment } from '../../environments/environment'

@Injectable()
export class AuthService {

    path = environment.path + 'auth'
    constructor( private http: HttpClient ) { }

    TOKEN_KEY = 'token'

    get token() {
        return localStorage.getItem(this.TOKEN_KEY)
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY)
    }

    logout(){
        localStorage.removeItem(this.TOKEN_KEY)
    }

    registerUser(userData) {
        console.log('sendUserRegistration()');
        this.http.post<any>(this.path + '/register', userData).subscribe(res => {
            console.log('register response: ' + res);
            // console.log(res);
            this.saveToken(res.token)
        })
    }

    loginUser(userData) {
        console.log('loginUser()');
        //lose typesafety here with any
        this.http.post<any>(this.path + '/login', userData).subscribe(res => {
            console.log(res);
            this.saveToken(res.token)
        })
    }

    saveToken(token){
        localStorage.setItem(this.TOKEN_KEY, token)
    }
}
