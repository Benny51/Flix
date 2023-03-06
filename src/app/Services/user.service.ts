import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private static readonly API_URL_CREATE_USER:string = environment.apiUrl+'user/create'

  constructor(private httpClient:HttpClient) { }

  create(user:User):Observable<User>
  {
    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('email', user.email);
    formData.append('password_', user.password);

    return this.httpClient.post<User>(UserService.API_URL_CREATE_USER,formData);
  }
}
