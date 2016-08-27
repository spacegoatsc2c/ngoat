import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { HttpModule }    from '@angular/http';
import { UserService } from './user.service';

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      HttpModule,
      FormsModule
    ],
    providers: [
      UserService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
