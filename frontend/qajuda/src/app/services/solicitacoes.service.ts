import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitacao } from '../models/solicitacao';

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {
  url = 'http://localhost:8000/solicitacao'

  constructor(private http: HttpClient) { }

  getSolitacoes(acao_id:number): Observable<Solicitacao[]> {
    const apiUrl = `${this.url}/${acao_id}/`; 
    return this.http.get<Solicitacao[]>(apiUrl); 
  }
}
