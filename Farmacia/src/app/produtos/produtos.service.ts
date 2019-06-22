import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtosURL = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) { }

  adicionar(produto: Produto): Promise<any>{
    return this.http.post(this.produtosURL, produto)
    .toPromise();
  }

buscarPorCodigo(codigo: number): Promise<Produto> {
  return this.http.get<Produto>(this.produtosURL+'/'+codigo).toPromise();
}
listarPorNome(nome: string): Promise<any> {
  return this.http.get<any>(this.produtosURL + '?nome=' + nome).toPromise();
}

excluir(id:number):Promise<void>{
  return this.http.delete(this.produtosURL+'/'+id)
  .toPromise()
  .then(() => null);
}

alterar(produto: Produto): Promise<any>{
  return this.http.put(this.produtosURL+'/'+produto.id, produto)
  .toPromise();
}
}
