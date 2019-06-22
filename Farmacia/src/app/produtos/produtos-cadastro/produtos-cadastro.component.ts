import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Produto } from './../model';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent  {

  produto = new Produto();

  constructor(
    private service: ProdutosService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
  ) { }

  salvar(form: FormControl) {
    this.service.adicionar(this.produto)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Produto '+this.produto.nome+' cadastrado'});
      form.reset();
    });
  }

}
