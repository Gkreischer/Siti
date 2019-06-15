import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/shared/cliente';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-adiciona-clientes',
  templateUrl: './adiciona-clientes.page.html',
  styleUrls: ['./adiciona-clientes.page.scss'],
})
export class AdicionaClientesPage implements OnInit {

  constructor(private fb: FormBuilder, private crud: CrudService) {
    this.montaForm();
   }

  ngOnInit() {
  }

  formDadosCliente: FormGroup;
  dadosCliente: Cliente;
  erro;
  msg: string = null;

  get id() {
    return localStorage.getItem('id');
  }

  montaForm() {
    this.formDadosCliente = this.fb.group({
      nome: ['', [Validators.required]],
      cpfcnpj: ['', [Validators.required]],
      email: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      user_id: [this.id, [Validators.required]],
      celular: [''],
      whatsapp: [false],
      senha: ['', [Validators.required]],
      c_senha: ['', [Validators.required]]
    });
  }

  enviaForm() {
    this.dadosCliente = this.formDadosCliente.value;
    console.log(this.dadosCliente);

    this.crud.criaRegistro('/registroCliente', this.dadosCliente).subscribe((data) => {
      this.msg = 'Cliente cadastrado com sucesso.'
    }, error => {
      this.erro = error;
      console.log(this.erro);
    })
  }


}
