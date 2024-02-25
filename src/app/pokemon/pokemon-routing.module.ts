import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { DetailsComponent } from './components/details/details.component'


const routes: Routes = [
  {
    path: '',
    component: DashBoardComponent
  },
  {
    path : 'details/:id',
    component: DetailsComponent ,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
