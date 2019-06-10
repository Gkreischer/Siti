import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaClientesPage } from './adiciona-clientes.page';

describe('AdicionaClientesPage', () => {
  let component: AdicionaClientesPage;
  let fixture: ComponentFixture<AdicionaClientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionaClientesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
