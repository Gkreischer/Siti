import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaClientesPage } from './lista-clientes.page';
import { EdicaoDadosCadastraisComponent } from 'src/app/edicao-dados-cadastrais/edicao-dados-cadastrais.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ListaClientesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ListaClientesPage],
  entryComponents: [
    EdicaoDadosCadastraisComponent
  ]
})
export class ListaClientesPageModule { }
