import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

@Injectable()
export class UserService {
    public token: string;

    constructor(private http: Http) {
      if(localStorage.getItem('user') !== null){
        console.log('pulling user from local storage');
        this.token = localStorage.getItem('user');
      }
    }

    private userUrl = 'api/user';

    getUser(){
      return this.http.get(this.userUrl)
           .toPromise()
           .then(response => response.json().data as User)
           .catch(this.handleError);
    }

    private handleError(error: any) {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
}
