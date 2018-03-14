import { TestBed, inject, tick } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { AuthService } from "./auth.service";
import { ApiService } from "./api.service";
import { Injectable, Injector } from "@angular/core";
import { Http, ResponseOptions, ConnectionBackend, BaseRequestOptions, RequestOptions } from "@angular/http";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from "../model/User";

describe('ApiService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // HttpModule, //Angular2 replaced with HttpClientModule
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [ApiService]
    });
    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ApiService);
  });
  
  // afterEach(() => {
  //   // After every test, assert that there are no more pending requests.
  //   httpTestingController.verify();
  // });


    const usersResponseData = [{"_id":"5aa6594c181da12dbb3ebcdc","email":"sean@test.com","name":"Sean","description":"high"}] as User[]

    it('should be created', inject([ApiService], (service: ApiService) => {
      expect(service).toBeTruthy();
    }));

    it('should return expected users', inject([ApiService], (service: ApiService) => {
      // service.getUsers()
      // expect((service.users).toEqual(usersResponseData))
      let result: String[];
      service.getUsersNew().subscribe(
        users => expect(users).toEqual(usersResponseData, 'should return expected users'),
        fail
      );
    }));

  });

  