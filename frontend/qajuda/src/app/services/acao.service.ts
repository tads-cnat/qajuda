import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acao } from '../models/acao';

@Injectable({
  providedIn: 'root'
})
export class AcaoService {
  url = 'http://localhost:3000/'; // trocar para 8000 quando usar api django
  
  constructor(private http: HttpClient) { }

  getAcao(id: number): Observable<Acao> {
    return this.http.get<Acao>(this.url + 'acao/' + id + '/');
  }

  getAcoes(): Observable<Acao[]> {
    return this.http.get<Acao[]>(this.url + 'acao');
  }
}
