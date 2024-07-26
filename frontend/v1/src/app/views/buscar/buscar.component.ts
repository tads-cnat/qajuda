import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Acao } from 'src/app/models/acao';
import { AcaoService } from 'src/app/services/acao.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  acoes: Acao[] = [];
  termoBusca: string = '';
  semAcoes: boolean = false;
  dataFormatada: string = '';
  horaFormatada: string = '';

  constructor(private service: AcaoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.termoBusca = params['termo'] || '';
      this.carregarAcoesComFiltro();
      this.formatarDataHora();
    });
  }

  carregarAcoesComFiltro(): void {
    if (this.termoBusca === '') {
      this.service.getAcoes().subscribe((data) => (this.acoes = data));
      this.semAcoes = true;
      this.formatarDataHora();
    } else {
      this.service
        .filtrarAcoesPorNome(this.termoBusca)
        .subscribe((data) => (this.acoes = data));
      this.semAcoes = false;
      this.formatarDataHora();
      console.log(this.acoes.length);
      if (this.acoes.length === 1) {
        this.service.getAcoes().subscribe((data) => (this.acoes = data));
        this.formatarDataHora();
        this.semAcoes = true;
      }
    }
  }

  formatarDataHora(): void {
    // Converte o DateTime do Django para um objeto Date
    for (const acao of this.acoes) {
      const dataHoraInicio = new Date(acao.inicio);

      // Formatar a data no formato dd/MM/yyyy
      const dia = dataHoraInicio.getDate();
      const mes = dataHoraInicio.getMonth() + 1;
      const ano = dataHoraInicio.getFullYear();
      this.dataFormatada = `${dia}/${mes}/${ano}`;

      // Formatar a hora no formato hh:mm
      const horas = dataHoraInicio.getHours();
      const min = dataHoraInicio.getMinutes();
      this.horaFormatada = `${horas}:${min}`;
    }
  }
}
