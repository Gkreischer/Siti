import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Login } from './../shared/login';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  formLogin: FormGroup;
  dadosInseridosLogin: Login;
  erro;
  statusUsuarioLogin: boolean = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, public toastController: ToastController) {
    this.montaForm();
    
   }

  ngOnInit() {
    this.verificaSeUsuarioEstaLogado();
  }

  
  montaForm() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  async exibeToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  enviaForm(){
    this.dadosInseridosLogin = this.formLogin.value;
    this.loginServidor();
    console.log(this.dadosInseridosLogin);
  }

  loginServidor() {
    this.auth.login(this.dadosInseridosLogin).subscribe((data) => {
      console.log('Usuário logado', data);

      const token = data.token;
      const id = data.id;

      if(token && id) {
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        this.router.navigateByUrl('/home');
      }

    }, error => {
      this.erro = error;

      if(this.erro = 422){
        this.exibeToast('Dados inseridos estão corretos?');
      }
      console.log(this.erro);
    });
  }

  get token() {
    return localStorage.getItem('token');
  }

  verificaSeUsuarioEstaLogado(){

    if(this.token != null){
      this.statusUsuarioLogin = true;
      this.router.navigateByUrl('/home');
    } else {
      this.statusUsuarioLogin = false;
      this.router.navigateByUrl('/login');
    }
  }

}
