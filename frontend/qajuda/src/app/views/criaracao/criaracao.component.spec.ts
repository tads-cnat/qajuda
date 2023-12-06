import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaracaoComponent } from './criaracao.component';

describe('CriaracaoComponent', () => {
  let component: CriaracaoComponent;
  let fixture: ComponentFixture<CriaracaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriaracaoComponent]
    });
    fixture = TestBed.createComponent(CriaracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
