import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { IPokemonDetails } from '../models/pokemon-details.model';
import { Api } from '../utils/api.enum';
import { Constants } from 'src/app/shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  

  constructor(
    private http : HttpClient
  ) { }

  getPokemonList(): Observable<Pokemon>{
    return this.http.get<Pokemon>(Api.baseUrl)
  }

  getPokemonDetails(id:string): Observable<IPokemonDetails> {
    return this.http.get<IPokemonDetails>(Api.baseUrl+id+'/')
  }

  generateTheImgUrl(url:string): string {
    var baseUrl: string = Api.imgUrl;
    const id:string = this.featchUrlParameters(url)
    return baseUrl + id + Constants.imgType;
  }

  featchUrlParameters(str:string): string{
    let matches = str.match(/\d+/g);
     return matches ? matches[1] : '';
  }
}
