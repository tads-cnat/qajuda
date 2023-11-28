import { Component, OnInit } from '@angular/core';
import { CardDestaque } from 'src/app/models/carddestaque';
import { CardacoesService } from 'src/app/services/cardacoes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  acoes: CardDestaque[] = [];

  constructor(private service: CardacoesService) {}

  ngOnInit(): void {
    this.service.getAcoes().subscribe(data => this.acoes = data);
  }
}
