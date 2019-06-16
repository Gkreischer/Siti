import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Cliente } from 'src/app/shared/cliente';
import { ModalController } from '@ionic/angular';
import { EdicaoDadosCadastraisComponent } from 'src/app/edicao-dados-cadastrais/edicao-dados-cadastrais.component';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.page.html',
  styleUrls: ['./lista-clientes.page.scss'],
})
export class ListaClientesPage implements OnInit {

  erro;
  clientes: Cliente[] = [];

  constructor(private crud: CrudService, public modal: ModalController) { }

  ngOnInit() {
    this.consultaClientesDoUsuario();
  }

  ionViewDidEnter() {
    this.consultaClientesDoUsuario();
  }

  get idUsuario() {
    return localStorage.getItem('id');
  }

  consultaClientesDoUsuario() {
    this.crud.leRegistro(`/consultaClientesDoUsuario/${this.idUsuario}`).subscribe((data) => {
      this.clientes = data;

      this.clientes.sort((a, b) => {
        return a.nome.localeCompare(b.nome);
      });

    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

  deletaCliente(event) {
    let confirma = confirm('Deseja realmente deletar o cliente?');

    if (confirma) {
      let target = event.target || event.srcElement || event.currentTarget;
      let id = target.attributes.id.value;

      this.crud.deletaRegistro('/deletaCliente', id).subscribe((data) => {
        console.log('Cliente deletado com sucesso');

        this.clientes.splice(this.clientes.findIndex(cliente => cliente.id === id), 1);
        console.log('Cliente deletado com sucesso, lista de clientes atuais -->');
      }, error => {
        this.erro = error;
        console.log(this.erro);
      });
    } else {
      console.log('Operacao de deletar cliente cancelada');
    }
  }

  abreModalInfoCliente(event) {

    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    this.crud.leRegistroEspecifico('/dadosCliente', id).subscribe((cliente) => {
      this.abreModal(cliente.data);
    }, error => {
      this.erro = error;
      console.log(this.erro);
    })
  }

  async abreModal(dadosCliente: Cliente) {
    const modal = await this.modal.create({
      component: EdicaoDadosCadastraisComponent,
      componentProps: {
        dados: { dadosCliente }
      }
    });

    modal.onDidDismiss().then((data) => {
      this.consultaClientesDoUsuario();
    }).catch((error) => {
      console.log(error);
    })
    return await modal.present();
  }
}
