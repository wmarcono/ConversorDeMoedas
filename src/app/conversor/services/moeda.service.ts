import { Injectable } from '@angular/core';
import { Moeda } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  private moedas: Moeda[];

  constructor() { }

  private moedasObj = [
    {"sigla": "AUS", "descricao": "dolar australiano"},
    {"sigla": "BGN", "descrição": "levi bulgaro"},
    {"sigra": "BRL", "descrição": "real brasileiro"},
    {"sigla": "CAD", "descrição": "dolar canadense"},
    {"sigla": "CHF", "descrição": "franco suiço"},
    {"sigla": "CNY", "descrição": "yuan chines"},
    {"sigla": "CZK", "descrição": "coroa republica tcheca"},
    {"sigla": "DKK", "descrição": "coroa dinamarquesa"},
    {"sigla": "EUR", "descrição": "euro"},
    {"sigla": "GBP", "descrição": "libra esterlina"},
    {"sigla": "USD", "descrição": "dolar estanudense"},
    {"sigla": "AAA", "descrição": "aaaaaaaa"},
    { "sigla": "AAA", "descrição": "aaaaaaaa" },
  ];

  listarTodas(): Moeda[] {
    if(this.moedas){
      return this.moedas;
    }
    this.moedas = [];

    for (let moedaObj of this.moedasObj) {
      let moeda: Moeda = new Moeda();
        Object.assign(moeda, moedaObj);
          this.moedas.push(moeda);
    }

    return this.moedas;
  }

}
