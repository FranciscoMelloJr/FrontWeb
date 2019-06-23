import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from './model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientesURL = 'http://localhost:8080/clientes';
  clientesURLFiltro = this.clientesURL;

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    if (filtro.nome) {
      this.clientesURLFiltro = this.clientesURL + '/filtro?nome=' + filtro.nome;
    } else {
      this.clientesURLFiltro = this.clientesURL;
    }
    return this.http.get<any>(this.clientesURLFiltro).toPromise();
  }

  listarCliente(): Promise<any> {
    return this.http.get<any>('http://localhost:8080/clientes').toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Clientes> {
    return this.http.get<Clientes>(this.clientesURL + '/' + codigo).toPromise();
  }

  listarPorNome(nome: string): Promise<any> {
    return this.http.get<any>(this.clientesURL + '?nome=' + nome).toPromise();
  }

  alterar(cliente: Clientes): Promise<any> {
    return this.http.put(this.clientesURL + '/' + cliente.id, cliente)
      .toPromise();
  }

  adicionar(cliente: Clientes): Promise<any> {
    return this.http.post(this.clientesURL, cliente)
      .toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(this.clientesURL + '/' + id)
      .toPromise()
      .then(() => null);
  }

}
