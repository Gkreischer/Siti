import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Tecnico } from './../../../shared/tecnico';
import { CrudService } from './../../../services/crud.service';
import { ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-cd-tecnico',
  templateUrl: './cd-tecnico.page.html',
  styleUrls: ['./cd-tecnico.page.scss'],
})
export class CdTecnicoPage implements OnInit {

  constructor(private fb: FormBuilder, public toast: ToastController, private crud: CrudService) { }

  ngOnInit() {
    this.montaForm();
  }

  formCadastroTecnico: FormGroup;
  tecnico: Tecnico;


  erro;
  msg;
  destruido: ReplaySubject<boolean> = new ReplaySubject(1);

  montaForm() {
    this.formCadastroTecnico = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      cargo: ['', Validators.required],
      nomeEmpresa: '',
      site: '',
    });
  }

  enviaForm() {
    this.tecnico = this.formCadastroTecnico.value;
    this.crud.gravaRegistro('/tecnico', this.tecnico).takeUntil(this.destruido).subscribe((data) => {
      this.msg = data.msg;
      this.apresentaToastSucesso();
    }, error => {
      this.erro = error;
      this.apresentaToastErro();
      console.log(this.erro);
    });
  }

  async apresentaToastSucesso() {
    const toast = await this.toast.create({
      message: 'Você foi cadastrado com sucesso',
      duration: 2000
    });
    toast.present();
  }

  async apresentaToastErro() {
    const toast = await this.toast.create({
      message: 'Nos desculpe, não foi possível se cadastrar',
      duration: 2000
    });
    toast.present();
  }

  ngOnDestroy() {
    this.destruido.next(true);
    this.destruido.complete();
  }



}
