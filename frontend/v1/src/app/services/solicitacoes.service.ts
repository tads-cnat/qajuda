import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitacao } from '../models/solicitacao';
import { SolicitacaoBanco } from '../models/solicitacaoBanco';

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {
  url = 'http://localhost:8000/colaborador_acao';

  constructor(private http: HttpClient) {}

  getSolitacoes(acao_id: number): Observable<Solicitacao[]> {
    const apiUrl = `${this.url}/acao/${acao_id}/`;
    return this.http.get<Solicitacao[]>(apiUrl);
  }

  patchSolicitacao(
    id: number,
    solicitacao: SolicitacaoBanco
  ): Observable<SolicitacaoBanco> {
    return this.http.patch<SolicitacaoBanco>(`${this.url}/${id}/`, solicitacao);
  }
}
