import { TestBed } from '@angular/core/testing';

import { CardacoesService } from './services/cardacoes.service';

describe('CardacoesService', () => {
  let service: CardacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
