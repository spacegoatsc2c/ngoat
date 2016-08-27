import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/';
import { BossHomeComponent } from './boss-home/'
import { CharacterHomeComponent } from './character-home/';
import { ArticleWriterComponent } from './article-writer/';

const appRoutes: Routes = [
  { path: 'boss/:id', component: BossHomeComponent },
  { path: 'character/:name', component: CharacterHomeComponent },
  { path: 'submit', component: ArticleWriterComponent },
  { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
