import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatListModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { APP_BASE_HREF } from '@angular/common';
import { ApiService } from '../service/api.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
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
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
