import { VendasModule } from './vendas/vendas.module';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutosModule } from './produtos/produtos.module';
import { ClientesCadastroComponent } from './clientes/clientes-cadastro/clientes-cadastro.component';
import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';
import { ClientesListagemComponent } from './clientes/clientes-listagem/clientes-listagem.component';
import { ProdutosListagemComponent } from './produtos/produtos-listagem/produtos-listagem.component';
import { VendasCadastroComponent } from './vendas/vendas-cadastro/vendas-cadastro.component';


const rotas: Routes = [
  {path: '', redirectTo:'produtos/listagem', pathMatch:'full'},
  { path: 'produtos', component: ProdutosCadastroComponent },
  { path: 'produtos/listagem', component: ProdutosListagemComponent },
  { path: 'produtos/:id', component: ProdutosCadastroComponent },
  { path: 'clientes', component: ClientesCadastroComponent },
  { path: 'clientes/listagem', component: ClientesListagemComponent },
  { path: 'clientes/:id', component: ClientesCadastroComponent },
  { path: 'vendas', component: VendasCadastroComponent },
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
    VendasModule,
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
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
