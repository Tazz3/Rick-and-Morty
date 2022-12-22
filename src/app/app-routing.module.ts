import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { CharactersInEpisodesComponent } from './characters-in-episodes/characters-in-episodes.component';
import { EpisodesFilterComponent } from './episodes-filter/episodes-filter.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  {
    path: 'episodes',
    component: EpisodesComponent,
    children: [{ path: 'episodes-filter', component: EpisodesFilterComponent }],
  },
  {
    path: 'characters-in-episodes',
    component: CharactersInEpisodesComponent,
  },
  { path: 'character/:name/:status', component: CharacterInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
