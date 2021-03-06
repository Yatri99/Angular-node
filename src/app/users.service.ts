import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()

export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get('/users').map((users)=>{
      return users;
    });
  
  }
}
 