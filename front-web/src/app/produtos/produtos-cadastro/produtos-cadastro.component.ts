import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CategoriasService } from './../../categorias/categorias.service';
import { Categoria } from './../../categorias/model';
import { Produto } from './../model';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {

  produto = new Produto();
  categorias: Categoria[];

  constructor(
    private service: ProdutosService,
    private categoriaService: CategoriasService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.pesquisarCategorias();
  }

  pesquisarCategorias(){
    this.categoriaService.pesquisar("")
    .then((dados)=>{
      this.categorias=dados;
    });
  }

  salvar(form: FormControl) {
    this.service.adicionar(this.produto)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Produto '+this.produto.nome+' cadastrado'});
      form.reset();
    });
  }

}
