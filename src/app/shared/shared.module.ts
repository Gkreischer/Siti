import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdicaoDadosCadastraisComponent } from '../edicao-dados-cadastrais/edicao-dados-cadastrais.component';
import { IonicModule } from '@ionic/angular';

// This module is for use pages and components shared with other components

@NgModule({
  declarations: [
    EdicaoDadosCadastraisComponent
  ],
  imports: [
    CommonModule,
    // To recognize ion elements, without it will display an error.
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EdicaoDadosCadastraisComponent
  ]
})
export class SharedModule { }
