export class Pokemon {
   count: number;
   next: string;
   previous: any;
   results: Pokemons[];
  constructor(){
    this.count =0;
    this.next = '';
    this.previous = '';
    this.results = []
  }
}

export class Pokemons {
    name: string;
    url: string
    constructor(){
        this.name = '';
        this.url = '';
    }
}