import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-listagem',
  templateUrl: './clientes-listagem.component.html',
  styleUrls: ['./clientes-listagem.component.css']
})
export class ClientesListagemComponent implements OnInit {

  clientes = [];
  private filtro: string;

  constructor(private service: ClientesService,
    private messageService: MessageService,
    private conf: ConfirmationService, ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.service.pesquisar({ nome: this.filtro })
      .then((dados) => {
        this.clientes = dados;
      });
  }

  filtrarProduto(cliente: string) {
    this.service.listarPorNome(cliente).then(dados => {
      this.clientes = dados;
    });
  }

  confirmarExclusao(cliente: any) {
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir ' + cliente.nome + '?',
      accept: () => {
        this.excluir(cliente);
      }
    });
  }

  excluir(cliente: any) {
    this.service.excluir(cliente.id)
      .then(() => {
        this.pesquisar();
        this.messageService.add({ severity: 'success', summary: 'Exclusão', detail: 'Cliente ' + cliente.nome + ' excluído com sucesso' });
      });
  }

  alterar(cliente: any) {
    this.service.alterar(cliente.id)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Edição', detail: 'Cliente ' + cliente.nome + ' alterado' });
      });
  }

}
