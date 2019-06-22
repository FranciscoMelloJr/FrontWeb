import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem, SelectItemGroup } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Clientes } from '../model';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.css']
})
export class ClientesCadastroComponent implements OnInit {

cliente = new Clientes();

tipos: { name: string; code: number; }[];
tipos2: SelectItem[];

    items: SelectItem[];
    item: string;
    tipoSelecionado: number;

    constructor(
    private service: ClientesService,
    private messageService: MessageService,
    private rota: ActivatedRoute

  ) {
    this.tipos = [
      {name: 'Pessoa Fisica', code: 1},
      {name: 'Pessoa Juridica', code: 2}
  ];

}
  ngOnInit() {
    const codigoCliente = this.rota.snapshot.params['id'];
    if(codigoCliente){
      this.carregarCliente(codigoCliente)
    }
  }
  carregarCliente(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.cliente = data;
      }
    );
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.cliente)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Cliente '+this.cliente.nome+' cadastrado'});
      form.reset();
    });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.cliente)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Cliente '+this.cliente.nome+' alterado'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
  }

  get editando(){
    return Boolean(this.cliente.id);
  }

}
