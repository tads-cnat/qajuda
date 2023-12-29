import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acao } from '../models/acao';

@Injectable({
  providedIn: 'root'
})
export class AcaoService {
  url = 'http://localhost:8000/'; // url do back
  
  constructor(private http: HttpClient) { }

  getAcao(id: number): Observable<Acao> {
    return this.http.get<Acao>(this.url + 'acao/' + id + '/');
  }

  getAcoes(): Observable<Acao[]> {
    return this.http.get<Acao[]>(this.url + 'acao');
  }

  filtrarAcoesPorNome(nome: string): Observable<Acao[]> {
    const url = `${this.url}acao/?nome__icontains=${nome}`;
    console.log(url)
    return this.http.get<Acao[]>(url);
  }
}
