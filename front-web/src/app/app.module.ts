import { ButtonModule } from 'primeng/button';
import { CidadesModule } from './cidades/cidades.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';

import { CategoriasModule } from './categorias/categorias.module';
import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';

import { EstadosModule } from './estados/estados.module';
import { EstadosPesquisaComponent } from './estados/estados-pesquisa/estados-pesquisa.component';
import { EstadosCadastroComponent } from './estados/estados-cadastro/estados-cadastro.component';

import {SidebarModule } from 'primeng/sidebar'
import { CidadesCadastroComponent } from './cidades/cidades-cadastro/cidades-cadastro.component';

import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';
import { ProdutosModule } from './produtos/produtos.module';

const rotas: Routes = [
  {path: '', redirectTo:'categorias', pathMatch:'full'},
  {path: 'cidades', component: CidadesCadastroComponent},
  {path: 'produtos', component: ProdutosCadastroComponent},
  {path: 'categorias', component: CategoriasPesquisaComponent},
  {path: 'categorias/novo', component: CategoriasCadastroComponent},
  {path: 'categorias/:id', component: CategoriasCadastroComponent},
  { path: 'estados', component: EstadosPesquisaComponent },
  { path: 'estados/novo', component: EstadosCadastroComponent },
  { path: 'estados/:id', component: EstadosCadastroComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CategoriasModule,
    EstadosModule,
    ProdutosModule,
    CidadesModule,
    ButtonModule,
    SidebarModule,
    HttpClientModule,
    ToastModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
    ,
  bootstrap: [AppComponent]
})
export class AppModule { }
