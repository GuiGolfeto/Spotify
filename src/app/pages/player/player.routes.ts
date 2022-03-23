import { Routes } from '@angular/router';
import { PlayerComponent } from './player.component';
import { HomeComponent } from './../../components/home/home.component';

export const PlayerRotas: Routes = [
  {
    path: '',
    component: PlayerComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }
]
