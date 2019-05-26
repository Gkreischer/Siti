import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from './../services/crud.service';
import { Router } from '@angular/router';
import { Register } from './../shared/register';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegistro: FormGroup;
  dadosRegistro: Register;
  erro;
  
  constructor(private crud: CrudService, private router: Router, public fb: FormBuilder, public toastController: ToastController) {
    this.montaForm();
   }

  ngOnInit() {
  }

  async exibeToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  montaForm() {
    	this.formRegistro = this.fb.group({
        nome: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        cpfcnpj: ['', [Validators.required]],
        password: ['', Validators.required],
        c_password: ['', Validators.required]
      });
  }

  enviaForm() {
    this.dadosRegistro = this.formRegistro.value;

    console.log(this.dadosRegistro);

    this.crud.criaRegistro('/register', this.dadosRegistro).subscribe((data) => {
      this.exibeToast('Cadastro efetuado com sucesso');
    }, error => {
      this.erro = error;
      console.log(this.erro);
      this.exibeToast('Erro ao registrar');
    })

  }

}
