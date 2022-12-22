import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-characters-in-episodes',
  templateUrl: './characters-in-episodes.component.html',
  styleUrls: ['./characters-in-episodes.component.css'],
})
export class CharactersInEpisodesComponent implements OnInit {
  constructor(private dtshr: DatashareService, private https: HttpClient) {}

  ngOnInit(): void {
    this.charArr = this.dtshr.giveChar();
    console.log(this.charArr);
    for (let i of this.charArr) {
      this.https.get(`${i}`).subscribe((x: any) => {
        this.chars.push(x);
        console.log(this.chars);
      });
    }
  }
  charArr: any[] = [];
  chars: any[] = [];
}
