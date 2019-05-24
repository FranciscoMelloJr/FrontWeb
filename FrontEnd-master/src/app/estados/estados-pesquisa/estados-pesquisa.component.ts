import { MessageService, ConfirmationService } from 'primeng/api';

import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';

@Component({
  selector: 'app-estados-pesquisa',
  templateUrl: './estados-pesquisa.component.html',
  styleUrls: ['./estados-pesquisa.component.css']
})
export class EstadosPesquisaComponent implements OnInit {

  estados = [];
  filtro:string;

  constructor(
    private service:EstadosService,
    private msgService: MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.service.pesquisar({nome:this.filtro})
    .then((dados)=>{
      this.estados=dados;
    });
  }

  confirmaExclusao(estado:any){
this.conf.confirm({
  message: 'Tem certeza que deseja excluir?' + estado.uf+'?',
  accept: ()=> {
  this.excluir(estado);
}
});
}




  excluir(estado: any){
    this.service.excluir(estado.id)
    .then(()=>{
      this.pesquisar();
      this.msgService.add({severity:'success', summary:'Exclusão', detail:'Estado '+estado.nome+' excluída com sucesso'});
    });
  }





}
