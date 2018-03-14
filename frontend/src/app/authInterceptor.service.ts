import { Injectable, Injector } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http'

import { AuthService } from './service/auth.service'

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    
    // constructor(private auth: AuthService){
    constructor(private injector: Injector){

    }

    intercept(req, next){
        
        var auth = this.injector.get(AuthService)
        var authRequest = req.clone({
            headers: req.headers.set('Authorization','token ' + auth.token)
        })
        // console.log(req)

        return next.handle(authRequest)
    }
}
