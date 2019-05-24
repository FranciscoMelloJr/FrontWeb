import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Estado } from '../estado.model';

@Component({
  selector: 'app-estados-cadastro',
  templateUrl: './estados-cadastro.component.html',
  styleUrls: ['./estados-cadastro.component.css']
})
export class EstadosCadastroComponent implements OnInit {

  estado = new Estado();

  constructor(
    private service: EstadosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    const codigoCategoria = this.rota.snapshot.params['id'];
    if (codigoCategoria) {
      this.carregarCategoria(codigoCategoria);
    }
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.estado)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Cadastro', detail: 'Categoria ' + this.estado.nome + ' cadastrada' });
        form.reset();
      });
  }

  carregarCategoria(id: number) {
    this.service.buscarPorCodigo(id).then((data) => {
      this.estado = data;
    });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.estado)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Edição', detail: 'Categoria ' + this.estado.nome + ' alterada' });
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
    return Boolean(this.estado.id);
  }

}
