import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from './model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientesURL = 'http://localhost:8080/clientes';

  constructor(
    private http: HttpClient

  ) { }

  listarCliente(): Promise<any> {
    return this.http.get<any>('http://localhost:8080/clientes').toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(this.clientesURL + '/' + id)
      .toPromise()
      .then(() => null);
  }

  adicionar(cliente: Clientes): Promise<any> {
    return this.http.post(this.clientesURL, cliente)
      .toPromise();
  }

  alterar(cliente: Clientes): Promise<any> {
    return this.http.put(this.clientesURL + '/' + cliente.id, cliente)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Clientes> {
    return this.http.get<Clientes>(this.clientesURL + '/' + codigo).toPromise();
  }
}
