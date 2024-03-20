import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceiteComponent } from './aceite.component';

describe('AceiteComponent', () => {
  let component: AceiteComponent;
  let fixture: ComponentFixture<AceiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AceiteComponent]
    });
    fixture = TestBed.createComponent(AceiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
