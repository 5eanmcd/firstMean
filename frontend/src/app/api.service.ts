// import { Http } from '@angular/http'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { environment } from '../environments/environment'

@Injectable()
export class ApiService {

    messages = []
    users = []
    profile = {}
    // profiledUser = {}
    path = environment.path

    constructor( private http: HttpClient ) {
        
    }

    getMessages(userId) {
        console.log('getMessages ' + this.path + 'posts/'+userId);
        this.http.get<any>(this.path + 'posts/' + userId).subscribe(res => {
            // console.log('getMessages Response ' + res);
            this.messages = res
        },error => console.error('Error occurred in getting messages ', error))
    }

    postMessage(message) {
        console.log('postMessage ' + message);
        this.http.post(this.path + 'post',message).subscribe(res => {
            console.log(res);
            // this.messages = res.json()
        })
    }

    getUsers() {
        console.log('getUsers');
        this.http.get<any>(this.path + 'users').subscribe(res => {
            console.log(res);
            this.users = res
        },error => console.error('Error occurred in getting users ', error))
    }

    getProfile(id) {
        console.log('getProfile');
        // return this.http.get(this.path + 'profile/' + id)
        this.http.get<any>(this.path + 'profile/' + id).subscribe(res => {
            console.log('apiService setting profile ' + res.name)
            this.profile = res
        })
    }

}