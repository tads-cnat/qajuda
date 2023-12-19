import { Component, OnInit } from '@angular/core';
import { AcaoService } from 'src/app/services/acao.service';
import { Acao } from 'src/app/models/acao';
// import { CardDestaque } from 'src/app/models/carddestaque';
// import { CardacoesService } from 'src/app/services/cardacoes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  acoes: Acao[] = [];

  constructor(private service: AcaoService) {}

  ngOnInit(): void {
    this.service.getAcoes().subscribe(data => this.acoes = data);
  }
}
