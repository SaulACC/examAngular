import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serviceUrl = 'http://localhost:40000/api/';

  constructor(private http:HttpClient) { }

  public getServiceGreeting() {
    return this.http.get(this.serviceUrl + 'getGreetings/');
  }

  public postServiceName(data) {
    return this.http.post(this.serviceUrl + 'postName/', data);
  }
}
