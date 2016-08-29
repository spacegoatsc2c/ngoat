import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { User } from './user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    public token: string;

    constructor(private http: Http) {
      if(localStorage.getItem('user') !== null){
        console.log('pulling user from local storage');
        this.token = localStorage.getItem('user');
      }
    }

    private userUrl = 'api/user/';

    getUser(token: string){
      let headers = new Headers({'Content-Type': 'application/json',
                                 'Authorization': 'Token ' + token });
      let options = new RequestOptions({headers: headers, body: ""});

      return this.http.get(this.userUrl, options)
           .toPromise()
           .then(response => response.json() as User)
           .catch(this.handleError);
    }

    private loginUrl: string = 'api/auth/';

    login(username: string, password: string){
      let body = JSON.stringify({'username':username, 'password':password});
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});

      return this.http.post(this.loginUrl, body, options)
                .toPromise()
                .then(response => this.requestUser(response.json().token))
                .catch(this.handleError);
    }

    private requestUser(token: string){
      this.token = token;
      localStorage.setItem('user', token);
      return this.getUser(token);
    }

    logout(){
      this.token = null;
      localStorage.removeItem('user');
    }

    private handleError(error: any) {
      console.error('An userservice error occurred', error);
      return Promise.reject(error);
    }
}
