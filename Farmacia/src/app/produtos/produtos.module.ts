import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { ProdutosService } from './produtos.service';

@NgModule({
  declarations: [ProdutosCadastroComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ProdutosCadastroComponent
  ],
  providers:[
    ProdutosService
  ]
})
export class ProdutosModule { }
