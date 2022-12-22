import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  listArr: any[] = [];
  genderArr: any[] = [];
  genderArrs: any[] = [];
  gend: string = '';
  currentGend: string = '';
  constructor(
    private https: HttpClient,

    private router: Router
  ) {
    this.https
      .get('https://rickandmortyapi.com/api/character')
      .subscribe((x: any) => {
        this.listArr = Object(x.results);
        this.genderArr = this.listArr;

        console.log(this.genderArr);
      });
  }

  gender() {
    if (this.gend == 'Female') {
      this.genderArrs = [];
      for (let i of this.listArr) {
        if (i['gender'] == 'Female') {
          this.genderArrs.push(i);
          this.genderArr = this.genderArrs;
        }
      }
    }
    if (this.gend == 'Male') {
      this.genderArrs = [];
      for (let i of this.listArr) {
        if (i['gender'] == 'Male') {
          this.genderArrs.push(i);
          this.genderArr = this.genderArrs;
        }
      }
    }
    if (this.gend == 'all') {
      this.genderArr = this.listArr;
    }
  }

  curNames: string = '';
  capitalize: string = '';

  uploadListArr: any[] = [];
  showIt() {
    this.uploadListArr = [];
    for (let i of this.listArr) {
      this.capitalize =
        this.curNames.charAt(0).toUpperCase() + this.curNames.slice(1);
      if (
        i['name'].includes(this.curNames) ||
        i['name'].includes(this.capitalize)
      ) {
        this.uploadListArr.push(i);
        this.genderArr = this.uploadListArr;
      } else if (this.curNames == '') {
        this.genderArr = this.listArr;
      }
    }
  }

  ngOnInit(): void {}
}
