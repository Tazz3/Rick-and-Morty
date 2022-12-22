import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  gend: string = '';

  constructor() {}

  ngOnInit(): void {}
}
