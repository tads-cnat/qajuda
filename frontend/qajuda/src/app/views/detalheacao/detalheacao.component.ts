import { Component, OnInit } from '@angular/core';
import { Acao } from 'src/app/models/acao';
import { AcaoService } from 'src/app/services/acao.service';

@Component({
  selector: 'app-detalheacao',
  templateUrl: './detalheacao.component.html',
  styleUrls: ['./detalheacao.component.css']
})
export class DetalheacaoComponent implements OnInit{
  acao!: Acao;

  constructor(private service: AcaoService) { }

  ngOnInit(): void {
    this.carregarAcao(1);
  }

  carregarAcao(id: number): void {
    this.service.getAcao(id).subscribe(
      (acao: Acao) => {
        this.acao = acao;
        console.log('Ação carregada:', this.acao);
      },
      (error) => {
        console.error('Erro ao carregar ação:', error);
      }
    );
  }
}
