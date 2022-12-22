import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatashareService {
  thisnumn!: number;
  thisArr: any[] = [];
  constructor() {
    this.shareEpisodeemitter.subscribe((x: number) => {
      this.thisnumn = x;
    });
    this.shareCharacteremitter.subscribe((x: any) => {
      this.thisArr = x;
    });
  }
  public shareEpisodeemitter: EventEmitter<number> = new EventEmitter();
  public shareCharacteremitter: EventEmitter<any> = new EventEmitter();
  giveNumb() {
    return this.thisnumn;
  }
  giveChar() {
    return this.thisArr;
  }
}
