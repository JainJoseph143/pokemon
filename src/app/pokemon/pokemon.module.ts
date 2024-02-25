import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { DetailsComponent } from './components/details/details.component';
import { PokemonService } from '../core/services/pokemon.service';
import { MatTabsModule} from '@angular/material/tabs';
import {MatRippleModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    DashBoardComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatTabsModule,
    MatRippleModule,
    MatListModule
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
