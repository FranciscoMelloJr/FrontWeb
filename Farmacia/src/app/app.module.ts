import {ButtonModule} from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { ClientesModule } from './clientes/clientes.module';
import { ProdutosModule } from './produtos/produtos.module';
import { ClientesCadastroComponent } from './clientes/clientes-cadastro/clientes-cadastro.component';
import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';

import {SidebarModule} from 'primeng/sidebar';



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
