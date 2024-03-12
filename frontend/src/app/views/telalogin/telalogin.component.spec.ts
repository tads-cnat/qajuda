import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaloginComponent } from './telalogin.component';

describe('TelaloginComponent', () => {
  let component: TelaloginComponent;
  let fixture: ComponentFixture<TelaloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaloginComponent]
    });
    fixture = TestBed.createComponent(TelaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
