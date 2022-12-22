import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
})
export class EpisodesComponent implements OnInit {
  constructor(
    private router: Router,
    private dtshr: DatashareService,
    private activeRoute: ActivatedRoute
  ) {}
  episodeNumb!: number;
  showEp() {
    this.dtshr.shareEpisodeemitter.emit(this.episodeNumb);
    this.router.navigate(['episodes-filter'], { relativeTo: this.activeRoute });
  }

  ngOnInit(): void {}
}
