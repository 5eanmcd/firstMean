import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core'

import { AppComponent } from './app.component';
import { ApiService } from './api.service'

import {MatButtonModule, 
  MatCheckboxModule} from '@angular/material'
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatInputModule} from '@angular/material/input'

import { RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms'

import { LoginComponent } from './login/login.component'
import { AuthService } from './auth.service'
import { UsersComponent } from './users/users.component'
import { ProfileComponent } from './profile/profile.component'
import { RegisterComponent } from './register/register.component'
import { MessagesComponent } from './messages.component'

import {MatListModule} from '@angular/material/list';
import { PostComponent } from './post/post.component';

import { HttpClientModule } from '@angular/common/http'

const routes = [
  { path: '', component: PostComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'users', component: UsersComponent}, 
  { path: 'profile/:id', component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // HttpModule, //Angular2 replaced with HttpClientModule
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
