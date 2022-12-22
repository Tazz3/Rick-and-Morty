import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-episodes-filter',
  templateUrl: './episodes-filter.component.html',
  styleUrls: ['./episodes-filter.component.css'],
})
export class EpisodesFilterComponent implements OnInit {
  constructor(
    private https: HttpClient,
    private dtshr: DatashareService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.https
      .get(
        `https://rickandmortyapi.com/api/episode/${(this, dtshr.giveNumb())}`
      )
      .subscribe((x: any) => {
        this.episodeCard = x;
        console.log(this.episodeCard);
        console.log(this.episodeCard['characters']);
      });
  }

  ngOnInit(): void {}

  episodeNumb!: number;
  episodeCard: any = '';
  characterz: any[] = [];

  characterShow() {
    this.characterz = this.episodeCard['characters'];
    this.dtshr.shareCharacteremitter.emit(this.characterz);
    this.router.navigate(['characters-in-episodes']);
  }
}
