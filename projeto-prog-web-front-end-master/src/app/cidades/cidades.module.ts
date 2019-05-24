import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadesCadastroComponent } from './cidades-cadastro/cidades-cadastro.component';
import { CidadesPesquisaComponent } from './cidades-pesquisa/cidades-pesquisa.component';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    CidadesCadastroComponent,
    CidadesPesquisaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ToastModule,
    ConfirmDialogModule,
    FormsModule,
    RouterModule,
    DropdownModule
  ],
  exports: [
    CidadesCadastroComponent,
    CidadesPesquisaComponent
  ]
})
export class CidadesModule { }
