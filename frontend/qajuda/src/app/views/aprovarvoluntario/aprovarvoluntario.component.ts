import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/models/colaborador';
import { ColaboradorService } from 'src/app/services/colaborador.service';


@Component({
  selector: 'app-aprovarvoluntario',
  templateUrl: './aprovarvoluntario.component.html',
  styleUrls: ['./aprovarvoluntario.component.css']
})
export class AprovarvoluntarioComponent implements OnInit{
  colaboradores: Colaborador[] = [];

  constructor(private service: ColaboradorService) {}

  ngOnInit(): void {
      this.service.getColaboradores().subscribe(data => this.colaboradores = data);
  }

  // Implementar método que troca status da solicitação
}
