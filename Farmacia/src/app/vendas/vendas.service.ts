import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venda } from './model';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  vendasURL = 'http://localhost:8080/vendas';

  constructor(private http: HttpClient) { }

  adicionar(venda: Venda): Promise<any>{
    return this.http.post(this.vendasURL, venda)
    .toPromise();
  }

  pesquisar(): Promise<any> {
    return this.http.get<any>(this.vendasURL).toPromise();
  }

}
