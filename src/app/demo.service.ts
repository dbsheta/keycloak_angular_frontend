import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  constructor(private http: HttpClient) {}

  getUserMsg() {
    return this.http.get('http://localhost:8080/user/greet');
  }

  getAdminMsg() {
    return this.http.get('http://localhost:8080/admin/greet');
  }
}
