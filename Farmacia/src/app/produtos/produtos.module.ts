import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
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
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProdutosListagemComponent } from './produtos-listagem/produtos-listagem.component';

@NgModule({
  declarations: [ProdutosCadastroComponent, ProdutosListagemComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    BrowserModule,
    TableModule,
    TooltipModule,
    ToastModule,
    ConfirmDialogModule,
    FormsModule,
    CurrencyMaskModule,
    PickListModule,
    RouterModule
  ],
  exports:[
    ProdutosCadastroComponent
  ],
  providers:[
    ProdutosService
  ]
})
export class ProdutosModule { }
