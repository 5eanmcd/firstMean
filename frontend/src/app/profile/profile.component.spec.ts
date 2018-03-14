import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatIconModule, MatListModule } from '@angular/material';
import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';
import { MessagesComponent } from '../messages.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent,
      MessagesComponent ],
      imports: [
        // BrowserModule,
        BrowserAnimationsModule,
        // // HttpModule, //Angular2 replaced with HttpClientModule
        HttpClientModule,
        FormsModule,
        MatInputModule,
        // MatButtonModule,
        MatCardModule,
        // MatToolbarModule,
        // MatInputModule,
        MatListModule,
        MatIconModule,
        RouterModule.forRoot([])
      ],
      providers: [AuthService, ApiService,
      {
        provide: APP_BASE_HREF, useValue: '/'
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
