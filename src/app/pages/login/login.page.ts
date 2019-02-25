import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CrudService } from './../../services/crud.service';
import { ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
import { Login } from './../../shared/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  login: Login;
  formLogin: FormGroup;

  erro;
  msg;


  constructor(private crud: CrudService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.montaForm();
  }

  montaForm(){
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  enviaForm(){
    this.login = this.formLogin.value;

    if(this.login.email == 'admin' && this.login.senha == 'password'){

    } else {
      console.log('Usuario não reconhecido');
    }
    console.log(this.login);
  }

}
