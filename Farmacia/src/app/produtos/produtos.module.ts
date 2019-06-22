import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from './produtos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickListModule } from 'primeng/picklist';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';

@NgModule({
  declarations: [ProdutosCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    InputTextModule,
    CurrencyMaskModule,
    PickListModule,
    ButtonModule
  ],
  exports:[
    ProdutosCadastroComponent
  ],
  providers:[
    ProdutosService
  ]
})
export class ProdutosModule { }
