import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-listagem',
  templateUrl: './produtos-listagem.component.html',
  styleUrls: ['./produtos-listagem.component.css']
})
export class ProdutosListagemComponent implements OnInit {

  produtos = [];
  private filtro: string;

  constructor(
    private service: ProdutosService,
    private messageService: MessageService,
    private conf: ConfirmationService,
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.service.pesquisar({ nome: this.filtro })
      .then((dados) => {
        this.produtos = dados;
      });
  }

  filtrarProduto(produto: string) {
    this.service.listarPorNome(produto).then(dados => {
      this.produtos = dados;
    });
  }

  confirmarExclusao(produto: any) {
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir ' + produto.nome + '?',
      accept: () => {
        this.excluir(produto);
      }
    });
  }

  excluir(produto: any) {
    this.service.excluir(produto.id)
      .then(() => {
        this.pesquisar();
        this.messageService.add({ severity: 'success', summary: 'Exclusão', detail: 'Produto ' + produto.nome + ' excluído com sucesso' });
      });
  }

  alterar(produto: any) {
    this.service.alterar(produto.id)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Edição', detail: 'Produto ' + produto.nome + ' alterado' });
      });
  }

}
