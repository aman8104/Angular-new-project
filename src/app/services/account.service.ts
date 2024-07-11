import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private http = inject(HttpClient);

  constructor() { }

  login(email: string, password: string) {
      return this.http
          .post<any>(`${environment.apiUrl}/Account/login`, { email, password})
          .pipe(
              map((Result) => {
                  return Result;
              })
          );
  }

  // resetpassword(email: any) {
  //     return this.http
  //         .get<any>(`${environment.apiUrl}/Account/resetpassword/${email}`)
  //         .pipe(
  //             map((user) => {
  //                 return user;
  //             })
  //         );
  // }

  // verifypassword(token: string, newPassword: string, email: string) {
  //     return this.http
  //         .post<any>(`${environment.apiUrl}/account/verifypassword`, { token, newPassword, email })
  //         .pipe(
  //             map((user) => {
  //                 return user;
  //             })
  //         );
  // }

  set_login(user_info: any) {
      localStorage.setItem('user', JSON.stringify(user_info));
  }

  isLoggedIn() {
      // const userJson = localStorage.getItem('user');
      // const userJson = false;
      // if (userJson) {
      //     const user = JSON.parse(userJson);
      //     return (user.accessToken) ? true : false;
      // } else {
          return false;
      // }
  }

  // getUserInfo() {
  //     var userJson = localStorage.getItem('user');
  //     if (userJson) {
  //         userJson = JSON.parse(userJson);
  //         return userJson;
  //     } else {
  //         return false;
  //     }
  // }

  // getUserId() {
  //     var userJson = localStorage.getItem('user');
  //     if (userJson) {
  //         var userObj : any = JSON.parse(userJson);
  //         return userObj?.userId || '';;
  //     } else {
  //         return '';
  //     }
  // }

  getJwtToken() {
      var userJson = localStorage.getItem('user');
      if (userJson) {
          var userObj : any = JSON.parse(userJson);
          return userObj?.accessToken || '';
      } else {
          return '';
      }
  }

  // getUserRole() {
  //     var userJson = localStorage.getItem('user');
  //     if (userJson) {
  //         var userObj : any = JSON.parse(userJson);
  //         return userObj?.role || [];
  //     } else {
  //         return [];
  //     }
  // }

  logout() {
      localStorage.clear();
  }
}
