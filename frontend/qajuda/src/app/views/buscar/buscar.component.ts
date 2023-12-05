import { Component, OnInit } from '@angular/core';
import { Acao } from 'src/app/models/acao';
import { AcaoService } from 'src/app/services/acao.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit{
  acoes: Acao[] = [];

  constructor(private service: AcaoService) {}

  ngOnInit(): void {
      this.service.getAcoes().subscribe(data => this.acoes = data);
  }
}
