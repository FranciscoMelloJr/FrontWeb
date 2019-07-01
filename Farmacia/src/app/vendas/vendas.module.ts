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

@NgModule({
  declarations: [VendasCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    CurrencyMaskModule,
    InputTextModule,
    PickListModule,
    ButtonModule
  ],
  exports:[
    VendasCadastroComponent
  ],
  providers:[
    VendasService
  ]
})
export class VendasModule { }
