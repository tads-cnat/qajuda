import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcolaboradorComponent } from './cardcolaborador.component';

describe('CardcolaboradorComponent', () => {
  let component: CardcolaboradorComponent;
  let fixture: ComponentFixture<CardcolaboradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardcolaboradorComponent]
    });
    fixture = TestBed.createComponent(CardcolaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
