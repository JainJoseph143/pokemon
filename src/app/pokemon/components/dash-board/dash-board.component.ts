import { Component, OnInit } from '@angular/core';
import { Pokemon, Pokemons } from '../../../core/models/pokemon.model';
import { PokemonService} from 'src/app/core/services/pokemon.service';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  public pokemonList: Pokemon = new Pokemon();
  public color:string = Constants.colorForSelect;
  constructor(
    private _pokemonService: PokemonService,
    private _router: Router,
  ){

  }
  ngOnInit(){
    this._pokemonService.getPokemonList().subscribe(resp =>{
      this.pokemonList =resp;     
    })
  }

  generateTheImgUrl(url:string): string {
      return this._pokemonService.generateTheImgUrl(url);
  }

  getPokemonDetails(card: Pokemons ) {
    const id:string = this._pokemonService.featchUrlParameters(card.url);
    this._router.navigate(['details',id])
  }

  

}
