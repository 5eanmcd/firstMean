import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatIconModule } from '@angular/material';
import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComponent ],
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
      providers: [AuthService, ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
