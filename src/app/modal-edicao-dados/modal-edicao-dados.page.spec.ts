import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEdicaoDadosPage } from './modal-edicao-dados.page';

describe('ModalEdicaoDadosPage', () => {
  let component: ModalEdicaoDadosPage;
  let fixture: ComponentFixture<ModalEdicaoDadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEdicaoDadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEdicaoDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
