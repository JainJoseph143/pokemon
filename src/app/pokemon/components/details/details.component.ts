import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemonDetails } from 'src/app/core/models/pokemon-details.model';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public pokemonDetails!: IPokemonDetails;


  constructor(
    private _route:ActivatedRoute,
    private _pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe( params =>{
      const pokemonId = params['id'];
      this.getPokemonDetailsById(pokemonId)
    })
  }

  getPokemonDetailsById(id:string){
    this._pokemonService.getPokemonDetails(id).subscribe(rsp=>{
      this.pokemonDetails =rsp;
    })
  }

  generateTheImgUrl(url:string): string {
    return this._pokemonService.generateTheImgUrl(url);
  }

}
