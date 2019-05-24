import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from './estado.model';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  estadosUrl = 'http://localhost:8080/estados';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    let urlFiltro = this.estadosUrl;
    if (filtro.nome) {
      urlFiltro += + '?nome=' + filtro.nome;
    }
    return this.http.get<any>(urlFiltro).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http
      .delete(this.estadosUrl + '/' + id)
      .toPromise()
      .then(() => null);
  }

  adicionar(estado: Estado): Promise<any> {
    return this.http.post(this.estadosUrl, estado).toPromise();
  }

  listarPorNome(nome: string): Promise<any> {
    return this.http.get<any>(this.estadosUrl + '?nome=' + nome).toPromise();
  }

  alterar(estado: Estado): Promise<any> {
    return this.http.put(this.estadosUrl + '/' + estado.id, estado)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Estado> {
    return this.http.get<Estado>(this.estadosUrl + '/' + codigo).toPromise();
  }
}
