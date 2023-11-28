import { Component } from '@angular/core';
import { Colaborador } from 'src/app/models/colaborador';


@Component({
  selector: 'app-aprovarvoluntario',
  templateUrl: './aprovarvoluntario.component.html',
  styleUrls: ['./aprovarvoluntario.component.css']
})
export class AprovarvoluntarioComponent {
  colaboradores: Colaborador[] = [];

  

  constructor() {
    // Crie exemplos de colaboradores e adicione à lista
    this.colaboradores.push({foto: 'sem foto' ,nome: 'Zezinho', idade: 30, bairro: 'Planalto', status: 'EM ESPERA' });
    this.colaboradores.push({foto: 'sem foto' ,nome: 'Bruninho', idade: 25, bairro: 'Tirol', status: 'EM ESPERA' });
    this.colaboradores.push({foto: 'sem foto' ,nome: 'Tia Lila', idade: 35, bairro: 'Igapó', status: 'EM ESPERA' });
    this.colaboradores.push({foto: 'sem foto' ,nome: 'Gringo', idade: 28, bairro: 'Satélite', status: 'EM ESPERA' });
    this.colaboradores.push({foto: 'sem foto' ,nome: 'Feli pão', idade: 32, bairro: 'Tirol', status: 'EM ESPERA' });
    this.colaboradores.push({foto: 'sem foto' ,nome: 'Coleguinha', idade: 35, bairro: 'Tirol', status: 'EM ESPERA' });
  }
}
