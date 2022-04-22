import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRotas } from './player.routes';
import { PainelEsquerdoComponent } from 'src/app/components/painelEsquerdo/painelEsquerdo.component';
import { BotaoMenuComponent } from 'src/app/components/botao-Menu/botao-Menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RodapeUsuarioComponent } from './../../components/rodape-usuario/rodape-usuario.component';
import { HomeComponent } from './../../components/home/home.component';
import { TopArtistaComponent } from './../../components/top-artista/top-artista.component';
import { PainelDireitoComponent } from './../../components/painel-direito/painel-direito.component';

@NgModule({
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent,
    BotaoMenuComponent,
    RodapeUsuarioComponent,
    HomeComponent,
    TopArtistaComponent,
    PainelDireitoComponent,
  ],
  imports: [
  CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRotas)
  ]
})
export class PlayerModule { }
