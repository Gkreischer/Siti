import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Usuario } from '../shared/usuario';
import { DadosRecebidos } from './../shared/dadosRecebidos';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from './../services/crud.service';
import { Cliente } from '../shared/cliente';

@Component({
  selector: 'app-edicao-dados-cadastrais',
  templateUrl: './edicao-dados-cadastrais.component.html',
  styleUrls: ['./edicao-dados-cadastrais.component.scss'],
})
export class EdicaoDadosCadastraisComponent implements OnInit {

  dadosRecebidos: DadosRecebidos;
  formEdicaoDados: FormGroup;
  dadosParaAtualizar: Cliente;
  erro;
  sucesso: boolean = false;
  constructor(public navParams: NavParams, private fb: FormBuilder, public modal: ModalController,
    private crud: CrudService) {
    this.dadosRecebidos = this.navParams.get('dados');
    console.log('Informacao recebida na modal:', this.dadosRecebidos);
    this.montaForm();
  }

  ngOnInit() {
  }

  montaForm() {
    this.formEdicaoDados = this.fb.group({
      nome: ['', [Validators.required]],
      sobrenome: '',
      cpfcnpj: ['', [Validators.required]],
      endereco: ['', Validators.required],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      celular: ''
    });

    if (this.dadosRecebidos.dadosUsuario) {
      this.formEdicaoDados.patchValue(this.dadosRecebidos.dadosUsuario);
    } else {
      this.formEdicaoDados.patchValue(this.dadosRecebidos.dadosCliente);
    }
  }

  enviaForm() {
    this.dadosParaAtualizar = this.formEdicaoDados.value;

    console.log(this.dadosParaAtualizar);

    if(this.dadosRecebidos.dadosUsuario){
      this.atualizaUsuario();
    } else {
      this.atualizaCliente();
    }
  }

  atualizaUsuario() {
    this.crud.atualizaRegistro(`/atualizaUsuario`, this.dadosRecebidos.dadosUsuario.id, this.dadosParaAtualizar).subscribe((data) => {
      console.log(data);
      this.sucesso = true;
    }, error => {
      this.erro = error;
      console.log(this.erro);
    })
  }

  atualizaCliente() {
    this.crud.atualizaRegistro(`/atualizaCliente`, this.dadosRecebidos.dadosCliente.id, this.dadosParaAtualizar).subscribe((data) => {
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