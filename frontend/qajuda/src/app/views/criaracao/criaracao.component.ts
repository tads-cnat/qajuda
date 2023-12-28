import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Acao } from 'src/app/models/acao';
// import { AcaoService } from 'src/app/services/acao.service';

@Component({
  selector: 'app-criaracao',
  templateUrl: './criaracao.component.html',
  styleUrls: ['./criaracao.component.css']
})
export class CriaracaoComponent {
  // acao: Acao = {nome:'', foto:'sem foto', responsavel:'', descricao:'', categoria:'', local:'', data:'', hora:''}
  acoes: Acao[] = [];

  // OnSubmit (acaoForm : NgForm){
  //   this.acao.nome = acaoForm.value.nome;
  //   //this.acao.foto = acaoForm.value.foto;
  //   this.acao.responsavel = acaoForm.value.responsavel;
  //   this.acao.descricao = acaoForm.value.descricao;
  //   this.acao.categoria = acaoForm.value.categoria;
  //   this.acao.local = acaoForm.value.local;
  //   this.acao.data = acaoForm.value.data;
  //   this.acao.hora = acaoForm.value.hora;
  // }
}
