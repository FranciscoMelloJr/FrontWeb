import { Categoria } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  categoriasUrl = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    let urlFiltro = this.categoriasUrl;
    if (filtro.nome) {
      urlFiltro += + '?nome=' + filtro.nome;
    }
    return this.http.get<any>(urlFiltro).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http
      .delete(this.categoriasUrl + '/' + id)
      .toPromise()
      .then(() => null);
  }

  adicionar(categoria: Categoria): Promise<any> {
    return this.http.post(this.categoriasUrl, categoria).toPromise();
  }

  listarPorNome(nome: string): Promise<any> {
    return this.http.get<any>(this.categoriasUrl + '?nome=' + nome).toPromise();
  }

  alterar(categoria: Categoria): Promise<any> {
    return this.http.put(this.categoriasUrl + '/' + categoria.id, categoria)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Categoria> {
    return this.http.get<Categoria>(this.categoriasUrl + '/' + codigo).toPromise();
  }
}
