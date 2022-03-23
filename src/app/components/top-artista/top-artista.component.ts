import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';
import { IArtista } from './../../Interfaces/IArtista';
import { newArtista } from './../../Common/factories';

@Component({
  selector: 'app-top-artista',
  templateUrl: './top-artista.component.html',
  styleUrls: ['./top-artista.component.scss']
})
export class TopArtistaComponent implements OnInit {

  topArtista: IArtista = newArtista();

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.buscarArtista();
  }

  async buscarArtista() {
    const artistas = await this.spotifyService.buscarTopArtistas(1);

    if (!!artistas){
      this.topArtista = artistas.pop();
    }

  }

}
