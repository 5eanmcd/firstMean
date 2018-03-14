import { TestBed, inject } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { AuthService } from "./auth.service";
import { ApiService } from "./api.service";

describe('ApiService', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          // HttpModule, //Angular2 replaced with HttpClientModule
          HttpClientModule
        ],
        providers: [ApiService]
      });
    });
  
    const usersResponseData = '[{"_id":"5aa6594c181da12dbb3ebcdc","email":"sean@test.com","name":"Sean","description":"high"}]'

    it('should be created', inject([ApiService], (service: ApiService) => {
      expect(service).toBeTruthy();
    }));

  });
  