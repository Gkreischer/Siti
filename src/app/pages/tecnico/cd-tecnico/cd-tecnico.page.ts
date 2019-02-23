import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cd-tecnico',
  templateUrl: './cd-tecnico.page.html',
  styleUrls: ['./cd-tecnico.page.scss'],
})
export class CdTecnicoPage implements OnInit {
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.montaForm();
  }

  formCadastroTecnico: FormGroup;
  tecnico;

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
    console.table(this.tecnico);
  }

  

}
