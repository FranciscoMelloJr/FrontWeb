import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CategoriasService } from './categorias.service';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CategoriasPesquisaComponent } from './categorias-pesquisa/categorias-pesquisa.component';

import {InputTextModule} from 'primeng/inputtext';

import {ButtonModule} from 'primeng/button';

import {TableModule} from 'primeng/table';

import {TooltipModule} from 'primeng/tooltip';
import { RouterModule } from '@angular/router';


import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { CategoriasCadastroComponent } from './categorias-cadastro/categorias-cadastro.component';


@NgModule({
  declarations: [
    CategoriasPesquisaComponent,
    CategoriasCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    BrowserModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ConfirmDialogModule,
    ToastModule,
    FormsModule,
    RouterModule

  ],
  exports: [
    CategoriasPesquisaComponent,
    CategoriasCadastroComponent
  ],
  providers: [CategoriasService],
})
export class CategoriasModule { }
