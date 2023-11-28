import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardDestaque } from '../models/carddestaque';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardacoesService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAcoes(): Observable<CardDestaque[]> {
    return this.http.get<CardDestaque[]>(this.url + 'carddestaque');
  }
}
