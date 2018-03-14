import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatListModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';
import { APP_BASE_HREF } from '@angular/common';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
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
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
