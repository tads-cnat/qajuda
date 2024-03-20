import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovarvoluntarioComponent } from './aprovarvoluntario.component';

describe('AprovarvoluntarioComponent', () => {
  let component: AprovarvoluntarioComponent;
  let fixture: ComponentFixture<AprovarvoluntarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprovarvoluntarioComponent]
    });
    fixture = TestBed.createComponent(AprovarvoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
