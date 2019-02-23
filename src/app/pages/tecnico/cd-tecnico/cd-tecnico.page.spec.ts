import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdTecnicoPage } from './cd-tecnico.page';

describe('CdTecnicoPage', () => {
  let component: CdTecnicoPage;
  let fixture: ComponentFixture<CdTecnicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdTecnicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdTecnicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
