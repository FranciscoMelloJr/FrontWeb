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
export class ProdutosCadastroComponent implements OnInit {

  produto = new Produto();

  constructor(
    private service: ProdutosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {

    const codigoProduto = this.rota.snapshot.params['id'];
    if (codigoProduto) {
      this.carregarProduto(codigoProduto);
    }
  }

  carregarProduto(id: number) {
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.produto = data;
      }
      );
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.produto)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Cadastro', detail: 'Produto ' + this.produto.nome + ' cadastrado' });
        form.reset();
      });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.produto)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Edição', detail: 'Produto ' + this.produto.nome + ' alterado' });
        form.reset();
      });
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.alterar(form);
    } else {
      this.inserir(form);
    }
  }

  get editando() {
    return Boolean(this.produto.id);
  }
}
