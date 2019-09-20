import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  // RegisterUser(user:User){
  

  //   return this.http.post<User>("http://localhost:8081/user/save",user);
    
  //   }

  private baseUrl = 'http://localhost:8081/user/';

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }
  

}
