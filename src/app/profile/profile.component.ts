import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: User;
  public logged_in: boolean;
  public username: string;
  public password: string;
  public errorText: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    if(this.userService.token){
      this.userService.getUser(this.userService.token).then(
        user => {this.user = user; this.logged_in = true}
      );
    } else {
      this.logged_in = false;
    }
  }

  logout(){
    this.user = null;
    this.userService.logout();
    this.logged_in = false;
  }

  login(){
    this.userService.login(this.username, this.password).then(
      user => {this.user = user; this.logged_in = true}
    ).catch(
      error => this.errorText = error._body
    );
  }

}
