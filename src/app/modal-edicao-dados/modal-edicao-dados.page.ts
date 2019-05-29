import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-modal-edicao-dados',
  templateUrl: './modal-edicao-dados.page.html',
  styleUrls: ['./modal-edicao-dados.page.scss'],
})
export class ModalEdicaoDadosPage implements OnInit {

  dadosRecebidos: any;
  constructor(public navParams: NavParams) {
    this.dadosRecebidos = this.navParams.get('dadosUsuario');
    console.log('Informacao recebida na modal:', this.dadosRecebidos);
  }

  ngOnInit() {
  }

}
