import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable()
export class ApiService {

    messages = []
    users = []
    profiledUser = {}
    path = 'http://localhost:3000/'

    constructor( private http: Http ) {
        
    }

    getMessages(userId) {
        console.log('getMessages');
        this.http.get(this.path + 'posts/'+userId).subscribe(res => {
            console.log(res);
            this.messages = res.json()
        })
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
        this.http.get(this.path + 'users').subscribe(res => {
            console.log(res);
            this.users = res.json()
        })
    }

    getProfile(id) {
        console.log('getProfile');
        return this.http.get(this.path + 'profile/' + id)
    }

}