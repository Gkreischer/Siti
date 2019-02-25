import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'cdTecnico', loadChildren: './pages/tecnico/cd-tecnico/cd-tecnico.module#CdTecnicoPageModule' },
  { path: 'info-tecnico/:id', loadChildren: './pages/tecnico/info-tecnico/info-tecnico.module#InfoTecnicoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
