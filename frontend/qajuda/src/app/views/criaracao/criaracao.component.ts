import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AcaoBanco } from 'src/app/models/acaoBanco';
import { Categoria } from 'src/app/models/categoria';
import { Colaborador } from 'src/app/models/colaborador';
import { AcaoService } from 'src/app/services/acao.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criaracao',
  templateUrl: './criaracao.component.html',
  styleUrls: ['./criaracao.component.css']
})
export class CriaracaoComponent implements OnInit {
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

  acao: AcaoBanco = {
    // Inicialize a categoria com valores padrão
    nome: '',
    status: true,
    descricao: '',
    modalidade: true,
    local: '',
    tema: '',
    max_volunt: 0,
    url: '',
    inicio: new Date(),
    fim: new Date(),
    avaliacao: 0,
    qtd_volunt: 0,
    categoria: 0,
    criador: 1,
    foto: 1
    //criada_em: new Date(),
  };

  constructor(
    private acaoService: AcaoService,
    private categoriaService: CategoriaService,
    private colaboradorService: ColaboradorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarCategorias();
  }

  carregarCategorias(): void {
    this.categoriaService.getCategorias().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  pegarColaborador(): void {
    this.colaboradorService.getColaborador().subscribe((data) => {
      this.criadorDaAcao = data;
    });
  }

  criarAcao(acaoForm: NgForm) {
    // Preenchimento dos atributos
    this.acao.nome = acaoForm.value.nome;
    //this.acao.status = acaoForm.value.status;
    this.acao.descricao = acaoForm.value.descricao;
    //this.acao.modalidade = acaoForm.value.modalidade;
    this.acao.local = acaoForm.value.local;
    this.acao.tema = acaoForm.value.tema;
    //this.acao.max_volunt = acaoForm.value.max_volunt;
    this.acao.url = acaoForm.value.url;
    this.acao.inicio = acaoForm.value.inicio;
    this.acao.fim = acaoForm.value.fim;
    //this.acao.avaliacao = acaoForm.value.avaliacao;
    //this.acao.qtd_volunt = acaoForm.value.qtd_volunt;
    this.acao.categoria = acaoForm.value.categoria;
    //this.acao.criador = acaoForm.value.criador,
    //this.acao.foto = acaoForm.value.foto;
    console.log(this.acao);
    console.log(acaoForm);

    // Post da ação e confirmação no console
    this.acaoService.createAcao(this.acao).subscribe(
      (acao) => {
        console.log(acao);
        alert('Sua ação foi criada com sucesso');
        this.router.navigate(['/']);
        console.log('Acao criada');
      },
      (error) => {
        console.error('Erro ao criar ação:', error);
      }
    );
  }
}
