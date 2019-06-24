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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [ProdutosCadastroComponent, ProdutosListagemComponent],
  imports: [
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CheckboxModule,
    CommonModule,
    ConfirmDialogModule,
    CurrencyMaskModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    PickListModule,
    RouterModule,
    TableModule,
    ToastModule,
    TooltipModule
  ],
  exports: [
    ProdutosCadastroComponent,
    ProdutosListagemComponent
  ],
  providers: [
    ProdutosService
  ]
})
export class ProdutosModule { }
