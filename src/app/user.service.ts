import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    private userUrl = 'app/user';

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
