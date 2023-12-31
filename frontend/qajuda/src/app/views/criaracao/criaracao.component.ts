import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Acao } from 'src/app/models/acao';
import { Categoria } from 'src/app/models/categoria';
import { Colaborador } from 'src/app/models/colaborador';
import { AcaoService } from 'src/app/services/acao.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ColaboradorService } from 'src/app/services/colaborador.service';

@Component({
  selector: 'app-criaracao',
  templateUrl: './criaracao.component.html',
  styleUrls: ['./criaracao.component.css']
})
export class CriaracaoComponent implements OnInit{
  categorias: Categoria[] = [];

  // Temporário até encontra a solução, foi feito apenas pra funcionar o CDU005
  criadorDaAcao: Colaborador = {
    id: 0,
    user: {
      first_name: '',
      last_name: '',
      email: ''
    },
    telefone1: '',
    telefone2: '',
    cidade: '',
    bairro: '',
    data_nasc: new Date(),
    bio: '',
    categoria: { id: 0, nome: '' }
  };


  acao: Acao = {
    id: 0,
    categoria: { id: 0, nome: '' }, // Inicialize a categoria com valores padrão
    criador: this.criadorDaAcao,
    nome: '',
    status: false,
    descricao: '',
    criada_em: new Date(),
    modalidade: false,
    local: '',
    tema: '',
    max_volunt: 0,
    url: '',
    inicio: '',
    fim: '',
    avaliacao: 0,
    qtd_volunt: 0
  };

  constructor(private acaoService: AcaoService, private categoriaService: CategoriaService, private colaboradorService: ColaboradorService) {  }


  ngOnInit(): void {
    this.carregarCategorias();
  }


  carregarCategorias(): void {
    this.categoriaService.getCategorias().subscribe(categorias => {
      this.categorias = categorias;
    })
  }

  pegarColaborador(): void {
    this.colaboradorService.getColaborador().subscribe(data => {this.criadorDaAcao = data})
  }


  criarAcao(acaoForm: NgForm) {
    // Preenchimento dos atributos
    this.acao.nome = acaoForm.value.nome;
    this.acao.categoria = {
      id: acaoForm.value.categoria,
      nome: ''
    };
    this.acao.tema = acaoForm.value.tema;
    this.acao.inicio = acaoForm.value.inicio;
    this.acao.fim = acaoForm.value.fim;
    this.acao.local = acaoForm.value.local;
    this.acao.descricao = acaoForm.value.descricao;

    this.acao.criada_em = new Date();
    this.acao.status = true;
    this.acao.modalidade = true;

    // Post da ação e confirmação no console
    this.acaoService.createAcao(this.acao).subscribe(
      (acao) => {
        console.log(acao);
        console.log('Acao criada');
      },
      (error) => {
        console.error('Erro ao criar ação:', error);
      }
    );
  }
}
