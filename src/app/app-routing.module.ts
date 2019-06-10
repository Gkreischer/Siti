import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterPageModule'
  },
  {
    path: 'dadosCadastrais',
    loadChildren: './dados-cadastrais/dados-cadastrais.module#DadosCadastraisPageModule'
  },
  { path: 'dados-cadastrais', loadChildren: './dados-cadastrais/dados-cadastrais.module#DadosCadastraisPageModule' },
  { path: 'modal-edicao-dados', loadChildren: './modal-edicao-dados/modal-edicao-dados.module#ModalEdicaoDadosPageModule' },
  { path: 'clientes', loadChildren: './clientes/clientes.module#ClientesPageModule' },  { path: 'adiciona-clientes', loadChildren: './clientes/adiciona-clientes/adiciona-clientes.module#AdicionaClientesPageModule' },
  { path: 'remove-clientes', loadChildren: './clientes/remove-clientes/remove-clientes.module#RemoveClientesPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
