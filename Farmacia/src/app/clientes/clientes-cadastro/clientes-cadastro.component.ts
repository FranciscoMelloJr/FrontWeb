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
tipo: SelectItem[];
clientes: Clientes[];
selectedCity: Clientes;
groupedCars: SelectItemGroup[];

    cars: SelectItem[];
    selectedCar1: string;
    selectedCar2: string = 'BMW';
    selectedCar3: string;
    items: SelectItem[];
    item: string;
  cities: { name: string; code: string; }[];

    constructor(
    private service: ClientesService,
    private messageService: MessageService,
    private rota: ActivatedRoute

  ) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

  this.cars = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'}
  ];

  this.groupedCars = [
      {
          label: 'Germany', value: 'germany.png',
          items: [
              {label: 'Audi', value: 'Audi'},
              {label: 'BMW', value: 'BMW'},
              {label: 'Mercedes', value: 'Mercedes'},
              {label: 'Murcia', value: 'Murcia'}
          ]
      },
      {
          label: 'USA', value: 'usa.png',
          items: [
              {label: 'Cadillac', value: 'Cadillac'},
              {label: 'Ford', value: 'Ford'},
              {label: 'GMC', value: 'GMC'}
          ]
      },
      {
          label: 'Japan', value: 'japan.png',
          items: [
              {label: 'Honda', value: 'Honda'},
              {label: 'Mazda', value: 'Mazda'},
              {label: 'Toyota', value: 'Toyota'}
          ]
      }
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
