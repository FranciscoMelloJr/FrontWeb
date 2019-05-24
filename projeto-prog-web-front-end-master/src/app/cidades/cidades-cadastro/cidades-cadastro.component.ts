import { Component, OnInit } from '@angular/core';
import { CidadesService } from '../cidades.service';
import { MessageService, SelectItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Estado } from 'src/app/estados/estado.model';
import { FormControl } from '@angular/forms';
import { Cidade } from '../cidade.model';
import { EstadosService } from 'src/app/estados/estados.service';

@Component({
  selector: 'app-cidades-cadastro',
  templateUrl: './cidades-cadastro.component.html',
  styleUrls: ['./cidades-cadastro.component.css']
})
export class CidadesCadastroComponent implements OnInit {

  cidade = new Cidade();
  estados: Estado[];
  estadoSelecionado = new Estado();

  constructor(
    private service: CidadesService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    private estadoService: EstadosService
  ) { }

  ngOnInit() {
    const codigoCidade = this.rota.snapshot.params['id'];
    if (codigoCidade) {
      this.carregarCidade(codigoCidade);
    }
    this.carregarEstados();
    console.log(this.estadoSelecionado);

  }

  carregarEstados() {
    this.estadoService.pesquisar('').then(dados => {
      this.estados = dados['content'];
      console.log(this.estados);
    });
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.cidade)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Cadastro', detail: 'Categoria ' + this.cidade.nome + ' cadastrada' });
        form.reset();
      });
  }

  carregarCidade(id: number) {
    this.service.buscarPorCodigo(id).then((data) => {
      this.cidade = data;
    });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.cidade)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Edição', detail: 'Categoria ' + this.cidade.nome + ' alterada' });
        form.reset();
      });
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.alterar(form);
    } else {
      console.log(form.value);
      this.inserir(form);
    }
  }

  get editando() {
    return Boolean(this.cidade.id);
  }

}
