import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientesPage } from './clientes.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesPage,
    children: [
      {
        path: 'listar',
        loadChildren: './lista-clientes/lista-clientes.module#ListaClientesPageModule'
      },
      {
        path: 'adicionar',
        children: [
          {
            path: '',
            loadChildren: './adiciona-clientes/adiciona-clientes.module#AdicionaClientesPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/clientes/listar',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientesPage]
})
export class ClientesPageModule {}
