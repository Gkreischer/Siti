import { Component, OnInit } from '@angular/core';
import { CrudService } from './../services/crud.service';
import { Usuario } from './../shared/usuario';
import { Observable } from 'rxjs';

import { ModalController } from '@ionic/angular';
import { ModalEdicaoDadosPage } from './../modal-edicao-dados/modal-edicao-dados.page';

@Component({
  selector: 'app-dados-cadastrais',
  templateUrl: './dados-cadastrais.page.html',
  styleUrls: ['./dados-cadastrais.page.scss'],
})
export class DadosCadastraisPage implements OnInit {

  erro;
  dadosUsuario: Usuario;
  constructor(private crud: CrudService, public modal: ModalController) {
    this.consultaDadosUsuario();
   }

  ngOnInit() {
  }

  consultaDadosUsuario(){
    this.crud.leRegistroEspecifico('/dadosUsuario', '1').subscribe((data) => {
      this.dadosUsuario = data.data;
      console.log('Usuario recebido', this.dadosUsuario);
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

  abreModalAlteraDadosUsuario() {
    this.abreModal(this.dadosUsuario);
  }

  async abreModal(dadosUsuario: Usuario) {
    const modal = await this.modal.create({
      component: ModalEdicaoDadosPage,
      componentProps: {
        dadosUsuario: {dadosUsuario}
      }
    });

    modal.onDidDismiss().then((data) => {
      this.consultaDadosUsuario();
    }).catch((error) => {
      console.log(error);
    })
    return await modal.present();
  }
}
