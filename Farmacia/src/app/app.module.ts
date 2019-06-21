import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { ClientesModule } from './clientes/clientes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientesCadastroComponent } from './clientes/clientes-cadastro/clientes-cadastro.component';
import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ProdutosModule } from './produtos/produtos.module';


const rotas:Routes = [
{path: 'clientes',component:ClientesCadastroComponent},
{path: 'produtos',component:ProdutosCadastroComponent}

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProdutosModule,
    ClientesModule,
    HttpClientModule,
    ToastModule,
    ButtonModule,
    SidebarModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
