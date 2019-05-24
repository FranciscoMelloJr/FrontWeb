import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { RouterModule } from '@angular/router';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { EstadosService } from './estados.service';
import { EstadosPesquisaComponent } from './estados-pesquisa/estados-pesquisa.component';
import { EstadosCadastroComponent } from './estados-cadastro/estados-cadastro.component';


@NgModule({
  declarations: [
    EstadosPesquisaComponent,
    EstadosCadastroComponent],
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
    EstadosPesquisaComponent,
    EstadosCadastroComponent
  ],
  providers: [EstadosService],
})
export class EstadosModule { }
