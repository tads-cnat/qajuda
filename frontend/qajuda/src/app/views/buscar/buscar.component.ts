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

  constructor(private service: AcaoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.termoBusca = params['termo'] || '';
      this.carregarAcoesComFiltro();
    });
  }

  carregarAcoesComFiltro(): void {
    if (this.termoBusca === '') {
      this.service.getAcoes().subscribe(data => this.acoes = data);
    } else {
      this.service.filtrarAcoesPorNome(this.termoBusca).subscribe(data => this.acoes = data);
    }
  }
}
