import { Estado } from './../categorias/model';
import { EstadosModule } from './estados.module';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  estadosURL = 'http://localhost:4242/estados';
  EstadosURLFiltro= this.estadosURL;


  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro:any):Promise<any>{
    if(filtro.nome){
      this.EstadosURLFiltro = '/filtro?nome='+filtro.nome;
    }
      else{
        this.EstadosURLFiltro = this.estadosURL;
      }

    return this.http.get<any>(this.EstadosURLFiltro).toPromise();


  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.estadosURL +'/'+id).toPromise().then(() => null);
  }
  adicionar(cat: Estado): Promise<any>{
    return this.http.post(this.estadosURL,cat).toPromise();


  }
  alterar(estado: Estado): Promise<any>{
    return this.http.put(this.estadosURL+'/'+estado.id, estado)
    .toPromise();

  }
  buscarPorCodigo(codigo: number): Promise<Estado> {
    return this.http.get<Estado>(this.estadosURL+'/'+codigo).toPromise();
  }
}

