import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService) { }

  ngOnInit(){
    if(this.userService.token){
      this.userService.getUser().then(
          user => this.user = user
      );
    }
  }
}
