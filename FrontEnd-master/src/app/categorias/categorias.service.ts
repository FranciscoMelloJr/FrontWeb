import { Categoria } from './model';
import { CategoriasModule } from './categorias.module';
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasURL = 'http://localhost:4242/categorias';
  CategoriasURLFiltro= this.categoriasURL;


  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro:any):Promise<any>{

    if(filtro.nome){
      this.CategoriasURLFiltro = '/filtro?nome='+filtro.nome;
    }
      else{

        this.CategoriasURLFiltro = this.categoriasURL;
      }


    return this.http.get<any>(this.CategoriasURLFiltro).toPromise();


  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.categoriasURL +'/'+id).toPromise().then(() => null);
  }
  adicionar(cat: Categoria): Promise<any>{
    return this.http.post(this.categoriasURL,cat).toPromise();


  }
  alterar(categoria: Categoria): Promise<any>{
    return this.http.put(this.categoriasURL+'/'+categoria.id, categoria)
    .toPromise();

  }
  buscarPorCodigo(codigo: number): Promise<Categoria> {
    return this.http.get<Categoria>(this.categoriasURL+'/'+codigo).toPromise();
  }
}

