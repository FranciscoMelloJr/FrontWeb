import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cidade } from './cidade.model';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {
  cidadesUrl = 'http://localhost:8080/cidades';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    let urlFiltro = this.cidadesUrl;
    if (filtro.nome) {
      urlFiltro += + '?nome=' + filtro.nome;
    }
    return this.http.get<any>(urlFiltro).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http
      .delete(this.cidadesUrl + '/' + id)
      .toPromise()
      .then(() => null);
  }

  adicionar(cidade: Cidade): Promise<any> {
    return this.http.post(this.cidadesUrl, cidade).toPromise();
  }

  listarPorNome(nome: string): Promise<any> {
    return this.http.get<any>(this.cidadesUrl + '?nome=' + nome).toPromise();
  }

  alterar(cidade: Cidade): Promise<any> {
    return this.http.put(this.cidadesUrl + '/' + cidade.id, cidade)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Cidade> {
    return this.http.get<Cidade>(this.cidadesUrl + '/' + codigo).toPromise();
  }
}
