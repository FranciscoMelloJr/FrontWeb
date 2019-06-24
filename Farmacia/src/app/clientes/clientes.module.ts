import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule } from '@angular/router'
import { ClientesService } from './clientes.service';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ClientesListagemComponent } from './clientes-listagem/clientes-listagem.component';

@NgModule({
  declarations: [ClientesCadastroComponent, ClientesListagemComponent],
  imports: [
    ButtonModule,
    CheckboxModule,
    CommonModule,
    ConfirmDialogModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    RouterModule,
    TableModule,
    ToastModule,
    TooltipModule
  ],
  exports: [
    ClientesCadastroComponent,
    ClientesListagemComponent
  ],
  providers: [
    ClientesService
  ]
})
export class ClientesModule { }
