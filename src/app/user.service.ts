import { Injectable } from '@angular/core';
import { User } from './user';
import { USER } from './mock-user';

@Injectable()
export class UserService {

    getUser(){
        return Promise.resolve(USER);
    }

}
