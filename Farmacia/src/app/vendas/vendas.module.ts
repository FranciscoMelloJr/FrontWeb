import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendasCadastroComponent } from './vendas-cadastro/vendas-cadastro.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputTextModule } from 'primeng/inputtext';
import { PickListModule } from 'primeng/picklist';
import { ButtonModule } from 'primeng/button';
import { VendasService } from './vendas.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [VendasCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    CurrencyMaskModule,
    InputTextModule,
    PickListModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CheckboxModule,
    CommonModule,
    ConfirmDialogModule,
    CurrencyMaskModule,
    FormsModule,
    InputTextModule,
    PickListModule,
    RouterModule,
    TableModule,
    ToastModule,
    TooltipModule
  ],
  exports:[
    VendasCadastroComponent
  ],
  providers:[
    VendasService
  ]
})
export class VendasModule { }
