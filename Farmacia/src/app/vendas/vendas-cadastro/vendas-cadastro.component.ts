import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { VendasService } from './../vendas.service';
import { Component, OnInit } from '@angular/core';
import { Venda, Produto, Clientes } from '../model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vendas-cadastro',
  templateUrl: './vendas-cadastro.component.html',
  styleUrls: ['./vendas-cadastro.component.css']
})
export class VendasCadastroComponent implements OnInit {

  venda = new Venda();
  produtos: Produto[];
  cliente: Clientes[];

  constructor(
    private service: VendasService,
    private vendasService: VendasService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.pesquisarVendas();
  }

  pesquisarVendas() {
    this.vendasService.pesquisar()
      .then((dados) => {
        this.produtos = dados;
      });
  }

  salvar(form: FormControl) {
    this.service.adicionar(this.venda)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Venda', detail:'Realizada '});
      form.reset();
    });
  }
}
