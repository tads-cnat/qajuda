import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Acao } from 'src/app/models/acao';
import { AcaoService } from 'src/app/services/acao.service';

@Component({
  selector: 'app-detalheacao',
  templateUrl: './detalheacao.component.html',
  styleUrls: ['./detalheacao.component.css']
})
export class DetalheacaoComponent implements OnInit {
  acao!: Acao;
  dataFormatada: string = '';
  horaFormatada: string = '';

  constructor(private service: AcaoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idString = params.get('id');
      if (idString !== null) {
        const id = +idString; // '+' converte o parâmetro para número
        this.carregarAcao(id);
      } else {
        console.error('ID da ação não encontrado na rota.');
      }
    });
  }

  carregarAcao(id: number): void {
    this.service.getAcao(id).subscribe(
      (acao: Acao) => {
        this.acao = acao;
        this.formatarDataHora(); // Chama a função para formatar data e hora
        console.log('Ação carregada:', this.acao);
      },
      (error) => {
        console.error('Erro ao carregar ação:', error);
      }
    );
  }

  formatarDataHora(): void {
    // Converte o DateTime do Django para um objeto Date
    const dataHoraInicio = new Date(this.acao.inicio);

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
