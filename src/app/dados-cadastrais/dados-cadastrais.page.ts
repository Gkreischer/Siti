import { Component, OnInit } from '@angular/core';
import { CrudService } from './../services/crud.service';
import { Usuario } from './../shared/usuario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dados-cadastrais',
  templateUrl: './dados-cadastrais.page.html',
  styleUrls: ['./dados-cadastrais.page.scss'],
})
export class DadosCadastraisPage implements OnInit {

  erro;
  dadosUsuario: Observable<Usuario>;
  constructor(private crud: CrudService) {
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

}
