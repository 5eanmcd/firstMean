import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatIconModule, MatCardModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
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
        // MatListModule,
        MatIconModule
        // RouterModule.forRoot(routes)
      ],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
