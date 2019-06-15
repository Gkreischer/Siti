import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Cliente } from 'src/app/shared/cliente';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.page.html',
  styleUrls: ['./lista-clientes.page.scss'],
})
export class ListaClientesPage implements OnInit {

  erro;
  clientes: Cliente[] = [];

  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.consultaClientesDoUsuario();
  }

  ionViewDidEnter() {
    this.consultaClientesDoUsuario();
  }

  get idUsuario(){
    return localStorage.getItem('id');
  }

  consultaClientesDoUsuario(){
    this.crud.leRegistro(`/consultaClientesDoUsuario/${this.idUsuario}`).subscribe((data) => {
      this.clientes = data;

      this.clientes.sort((a,b) =>{
        return a.nome.localeCompare(b.nome);
      });
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }
}
