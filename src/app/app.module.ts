import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { HttpModule }    from '@angular/http';
import { UserService } from './user.service';
import { routing,
         appRoutingProviders } from './app.routing';

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      routing
    ],
    providers: [
      UserService,
      appRoutingProviders
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
