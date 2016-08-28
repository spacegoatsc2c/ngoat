import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { routing,
         appRoutingProviders } from './app.routing';
// Components
import { AppComponent }   from './app.component';
import { FeedComponent } from './feed/';
import { BossComponent } from './boss/';
import { BossHomeComponent } from './boss-home/';
import { CharacterHomeComponent } from './character-home/';
import { ArticleWriterComponent } from './article-writer/';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/';
import { RosterComponent } from './roster/';
import { RaidComponent } from './raid/raid.component';
import { ProfileComponent } from './profile/';
// Services
import { RaidService } from './raid.service';
import { ArticleService } from './article.service';
import { CharacterService } from './character.service';
import { UserService } from './user.service';

@NgModule({
    declarations: [
      AppComponent,
      FeedComponent,
      BossComponent,
      BossHomeComponent,
      CharacterHomeComponent,
      ArticleWriterComponent,
      ArticleComponent,
      HomeComponent,
      RosterComponent,
      RaidComponent,
      ProfileComponent,
    ],
    imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      routing,
    ],
    providers: [
      UserService,
      RaidService,
      CharacterService,
      ArticleService,
      appRoutingProviders
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
