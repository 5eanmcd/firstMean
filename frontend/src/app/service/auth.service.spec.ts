import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { HttpClient, HttpClientModule } from '@angular/common/http'
import { environment } from '../../environments/environment'

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // HttpModule, //Angular2 replaced with HttpClientModule
        HttpClientModule
      ],
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
