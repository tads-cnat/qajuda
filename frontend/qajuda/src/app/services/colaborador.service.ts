import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Colaborador } from '../models/colaborador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  url = 'http://localhost:3000/'; // trocar para 8000 quando usar api django

  constructor(private http: HttpClient) { }

  getColaboradores(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.url + 'colaborador');
  }
}
