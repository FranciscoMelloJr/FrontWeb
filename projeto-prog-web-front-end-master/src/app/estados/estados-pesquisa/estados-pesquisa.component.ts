import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-estados-pesquisa',
  templateUrl: './estados-pesquisa.component.html',
  styleUrls: ['./estados-pesquisa.component.css']
})
export class EstadosPesquisaComponent implements OnInit {

  estados = [];
  filtro: string;

  constructor(
    private service: EstadosService,
    private msgService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  confirmaExclusao(categoria: any) {
    this.confirmationService.confirm({
      message: `Confirma a exclusão de: ${categoria.nome} ?`,
      accept: () => {
        this.excluir(categoria);
      }
    });
  }

  pesquisar() {
    this.service.pesquisar({ nome: this.filtro }).then(dados => {
      this.estados = dados['content'];
    });
  }

  excluir(categoria: any) {
    this.service.excluir(categoria.id).then(() => {
      this.pesquisar();
      this.msgService.add({
        severity: 'success',
        summary: 'Exclusão',
        detail: `Categoria ${categoria.nome} excluída`
      });
    });
  }

  filtrarEstado(categoria: string) {
    this.service.listarPorNome(categoria).then(dados => {
      this.estados = dados;
    });
  }
}
