import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/';

const appRoutes: Routes = [
  //{ path: 'boss/:id', component: BossHome },
  //{ path: 'character/:name', component: CharacterHome },
  { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
