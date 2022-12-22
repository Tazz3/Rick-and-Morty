import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderComponent } from './slider/slider.component';
import { FilterComponent } from './filter/filter.component';

import { CharacterInfoComponent } from './character-info/character-info.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { FormsModule } from '@angular/forms';
import { EpisodesComponent } from './episodes/episodes.component';
import { CharactersInEpisodesComponent } from './characters-in-episodes/characters-in-episodes.component';
import { EpisodesFilterComponent } from './episodes-filter/episodes-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    SliderComponent,
    FilterComponent,
    CharacterInfoComponent,
    CharacterListComponent,
    EpisodesComponent,
    CharactersInEpisodesComponent,
    EpisodesFilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
