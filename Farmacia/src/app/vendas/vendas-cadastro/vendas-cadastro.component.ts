import { ProdutosService } from './../../produtos/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { VendasService } from './../vendas.service';
import { Component, OnInit } from '@angular/core';
import { Venda, Produto, Clientes } from '../model';
import { FormControl } from '@angular/forms';
import { ClientesService } from 'src/app/clientes/clientes.service';

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
    private produtosService: ProdutosService,
    private messageService: MessageService,
    private clientesService: ClientesService,
    private rota: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.pesquisarClientes();
    this.pesquisarProdutos();
  }

  pesquisarProdutos() {
    this.produtosService.listarProduto()
      .then((dados) => {
        this.produtos = dados;
      });
  }

  pesquisarClientes() {
    this.clientesService.listarCliente()
      .then((dados) => {
        this.cliente = dados;
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
