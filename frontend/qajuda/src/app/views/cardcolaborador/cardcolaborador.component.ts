import { Component } from '@angular/core';

@Component({
  selector: 'app-cardcolaborador',
  templateUrl: './cardcolaborador.component.html',
  styleUrls: ['./cardcolaborador.component.css']
})
export class CardcolaboradorComponent {
  colaboradores: any[] = [];

  constructor() {
    // Crie exemplos de colaboradores e adicione à lista
    this.colaboradores.push({ nome: 'Zezinho', idade: 30, telefone: '(84) 99456-7890', bairro: 'Planalto', aceito: false, recusado: false });
    this.colaboradores.push({ nome: 'Bruninho', idade: 25, telefone: '(84) 99789-1230', bairro: 'Tirol', aceito: false, recusado: false });
    this.colaboradores.push({ nome: 'Tia Lila', idade: 35, telefone: '(84) 99123-4560', bairro: 'Igapó', aceito: false, recusado: false });
    this.colaboradores.push({ nome: 'Gringo', idade: 28, telefone: '(84) 99567-8901', bairro: 'Satélite', aceito: false, recusado: false });
    this.colaboradores.push({ nome: 'Feli pão', idade: 32, telefone: '(84) 99890-1234', bairro: 'Tirol', aceito: false, recusado: false });
    this.colaboradores.push({ nome: 'Coleguinha', idade: 35, telefone: '(84) 99890-1234', bairro: 'Tirol', aceito: false, recusado: false });
  }

  responderSolicitacao(resposta: 'aceito' | 'rejeitado') {
    if (resposta == 'aceito') { 
      let aprovado = true; //chamar métodos aceitar_solicitação do backend
    } else {
      let recusado = true; //chamar métodos rejeitar_solicitação do backend
    }
  }

}
