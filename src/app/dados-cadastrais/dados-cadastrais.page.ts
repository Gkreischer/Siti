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
  id: string;
  constructor(private crud: CrudService, public modal: ModalController) {
    this.pegaIdUsuario();
   }

  ngOnInit() {
  }

  pegaIdUsuario() {
    this.id = localStorage.getItem('id').toString();

    if(this.id){
      this.consultaDadosUsuario(this.id);
    }
  }

  consultaDadosUsuario(id: string){
    this.crud.leRegistroEspecifico('/dadosUsuario', id).subscribe((data) => {
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
      this.consultaDadosUsuario(this.id);
    }).catch((error) => {
      console.log(error);
    })
    return await modal.present();
  }
}
