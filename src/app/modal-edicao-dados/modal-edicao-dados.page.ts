import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Usuario } from '../shared/usuario';
import { DadosRecebidos } from './../shared/dadosRecebidos';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from './../services/crud.service';

@Component({
  selector: 'app-modal-edicao-dados',
  templateUrl: './modal-edicao-dados.page.html',
  styleUrls: ['./modal-edicao-dados.page.scss'],
})
export class ModalEdicaoDadosPage implements OnInit {

  dadosRecebidos: DadosRecebidos;
  formEdicaoDados: FormGroup;
  dadosParaAtualizar: Usuario;
  erro;
  sucesso: boolean = false;
  constructor(public navParams: NavParams, private fb: FormBuilder, public modal: ModalController,
      private crud: CrudService) {
    this.dadosRecebidos = this.navParams.get('dadosUsuario');
    console.log('Informacao recebida na modal:', this.dadosRecebidos);
    this.montaForm();
  }

  ngOnInit() {
  }

  montaForm() {
   this.formEdicaoDados = this.fb.group({
     nome: ['', [Validators.required]],
     cpfcnpj: ['', [Validators.required]],
     endereco: ['', Validators.required],
     cidade: ['', [Validators.required]],
     estado: ['', [Validators.required]],
     cep: ['', [Validators.required]],
     telefone: ['', [Validators.required]]
   });

   this.formEdicaoDados.patchValue(this.dadosRecebidos.dadosUsuario);
  }

  enviaForm(){
    this.dadosParaAtualizar = this.formEdicaoDados.value;

    console.log(this.dadosParaAtualizar);

    this.crud.atualizaRegistro(`/atualizaUsuario`,this.dadosRecebidos.dadosUsuario.id,this.dadosParaAtualizar).subscribe((data) => {
      console.log(data);
      this.sucesso = true;
    }, error => {
      this.erro = error;
      console.log(this.erro);
    })
  }

  async fechaModal() {
    await this.modal.dismiss();
  }

}
