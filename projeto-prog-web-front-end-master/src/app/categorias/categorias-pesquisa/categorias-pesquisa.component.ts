import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.css']
})
export class CategoriasPesquisaComponent implements OnInit {
  categorias = [];
  filtro: string;

  constructor(
    private service: CategoriasService,
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
      this.categorias = dados['content'];
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

  filtrarCategoria(categoria: string) {
    this.service.listarPorNome(categoria).then(dados => {
      this.categorias = dados;
    });
  }
}
