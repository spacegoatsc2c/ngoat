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
  title = 'app works!';
  public user: User;

  constructor(private userService: UserService) { }

  ngOnInit(){
      this.userService.getUser().then(
          user => this.user = user
      );
  }
}
