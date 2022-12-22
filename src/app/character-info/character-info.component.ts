import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css'],
})
export class CharacterInfoComponent implements OnInit {
  name: string = '';
  status: string = '';
  active: any[] = [];
  listArrs: any[] = [];
  trues: boolean = false;

  // slider
  arr: any = '';
  slide_arr: any[] = [];
  current_key: any = '';
  second_key: any = '';
  third_key: any = '';

  constructor(private activeroutes: ActivatedRoute, private http: HttpClient) {}
  httpRequest() {
    if (this.trues == true) {
      this.http
        .get(
          `https://rickandmortyapi.com/api/character/?name=${this.name}&status=${this.status}`
        )

        .subscribe((x: any) => {
          this.listArrs = Object(x.results);
          this.arr = this.listArrs;
          console.log(this.listArrs);
          this.current_key = this.getRandom(this.arr);
          this.second_key = this.getRandom(this.arr);
          this.third_key = this.getRandom(this.arr);
          this.slide_arr.push(this.current_key);
          this.slide_arr.push(this.second_key);
          this.slide_arr.push(this.third_key);
        });
    }
  }

  // slider function

  keys: any = '';
  getRandom(obj: any) {
    this.keys = Object.values(obj);
    return this.keys[Math.floor(Math.random() * this.keys.length)];
  }

  // slider function

  ngOnInit(): void {
    this.activeroutes.params.subscribe((params: Params) => {
      this.name = params['name'];
      this.active = this.name.split(' ');
      this.name = this.active[0];
      this.status = params['status'];
      console.log(this.name);
      console.log(this.status);
      this.trues = true;
      this.httpRequest();
    });
  }
}
