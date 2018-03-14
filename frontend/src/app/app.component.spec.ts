import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import {MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatListModule, MatIconModule} from '@angular/material'
import { RouterModule } from '@angular/router';

import { ApiService } from './service/api.service';
import { AuthService } from './service/auth.service';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './authInterceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages.component';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const routes = [
      { path: '', component: PostComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'login', component: LoginComponent},
      { path: 'users', component: UsersComponent}, 
      { path: 'profile/:id', component: ProfileComponent}
    ]
    TestBed.configureTestingModule({
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
        MatIconModule,
        RouterModule.forRoot(routes)
      ],
      providers: [ApiService, AuthService, 
        {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
        },
        {
          provide: APP_BASE_HREF, useValue: '/'
        }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'mean-social app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mean-social app');
  }));
  it('should render mean-social in a mat-button', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('mean-social');
  }));
});
