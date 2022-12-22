import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  arr: any = '';
  slide_arr: any[] = [];
  current_key: any = '';
  second_key: any = '';
  third_key: any = '';
  constructor(private http: HttpClient) {
    this.http
      .get('https://rickandmortyapi.com/api/character')
      .subscribe((x: any) => {
        this.arr = Object(x.results);

        this.current_key = this.getRandom(this.arr);
        this.second_key = this.getRandom(this.arr);
        this.third_key = this.getRandom(this.arr);
        this.slide_arr.push(this.current_key);
        this.slide_arr.push(this.second_key);
        this.slide_arr.push(this.third_key);
      });
  }

  keys: any = '';
  getRandom(obj: any) {
    this.keys = Object.values(obj);
    return this.keys[Math.floor(Math.random() * this.keys.length)];
  }

  ngOnInit(): void {}
}
