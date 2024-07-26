import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestaqueComponent } from './card-destaque.component';

describe('CardDestaqueComponent', () => {
  let component: CardDestaqueComponent;
  let fixture: ComponentFixture<CardDestaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestaqueComponent]
    });
    fixture = TestBed.createComponent(CardDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
