import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheacaoComponent } from './detalheacao.component';

describe('DetalheacaoComponent', () => {
  let component: DetalheacaoComponent;
  let fixture: ComponentFixture<DetalheacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheacaoComponent]
    });
    fixture = TestBed.createComponent(DetalheacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
