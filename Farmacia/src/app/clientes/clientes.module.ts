import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {CheckboxModule} from 'primeng/checkbox';

import {RouterModule} from '@angular/router'

import { ClientesService } from './clientes.service';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';

@NgModule({
  declarations: [ClientesCadastroComponent],
  imports: [
    CommonModule,
    DropdownModule,
    ToastModule,
    ButtonModule,
    RouterModule,
    InputTextModule,
    FormsModule,
    CheckboxModule
  ],
  providers: [
    ClientesService
  ],
  exports:[
    RouterModule,
    ClientesCadastroComponent
  ]
})
export class ClientesModule { }
