import { Component, OnInit } from '@angular/core';
import { Solicitacao } from 'src/app/models/solicitacao';
import { SolicitacaoBanco } from 'src/app/models/solicitacaoBanco';
import { SolicitacoesService } from 'src/app/services/solicitacoes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aprovarvoluntario',
  templateUrl: './aprovarvoluntario.component.html',
  styleUrls: ['./aprovarvoluntario.component.css']
})
export class AprovarvoluntarioComponent implements OnInit {
  solicitacoes: Solicitacao[] = [];
  loading: boolean = true;

  solicitacao: SolicitacaoBanco = {
    convite: '',
    data_convite: new Date(),
    solicitacao: 'E',
    data_solicitacao: new Date(),
    responsavel: false,
    data_responsavel: new Date(),
    acao: 1,
    colaborador: 1
  };

  constructor(
    private solicitacoesService: SolicitacoesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const acao_idString = params.get('acao_id');
      if (acao_idString !== null) {
        const acao_id = +acao_idString; // '+' converte o parâmetro para número
        this.solicitacoesService.getSolitacoes(acao_id).subscribe(
          (data) => {
            this.solicitacoes = data;
            console.log(data);
            this.loading = false; // Definir como falso quando os dados foram carregados
          },
          (error) => {
            console.error('Erro ao obter solicitações:', error);
            this.loading = false; // Definir como falso em caso de erro
          }
        );
      } else {
        console.error('ID da ação não encontrado na rota.');
      }
    });
  }

  calcularIdade(dataNascimento: Date): number {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    if (
      hoje.getMonth() < nascimento.getMonth() ||
      (hoje.getMonth() === nascimento.getMonth() &&
        hoje.getDate() < nascimento.getDate())
    ) {
      idade--;
    }

    return idade;
  }

  AceitarSolicitacao(
    solicitacao_id: number,
    acao_id: number,
    colaborador_id: number
  ) {
    this.solicitacao.convite = undefined;
    this.solicitacao.data_convite = undefined;
    this.solicitacao.solicitacao = 'A';
    this.solicitacao.data_solicitacao = new Date();
    this.solicitacao.responsavel = false;
    this.solicitacao.data_responsavel = undefined;
    this.solicitacao.acao = acao_id;
    this.solicitacao.colaborador = colaborador_id;

    // Post da solicitacao e confirmação no console
    this.solicitacoesService
      .patchSolicitacao(solicitacao_id, this.solicitacao)
      .subscribe(
        (solicitacao) => {
          console.log(solicitacao);
          alert('Solicitacao foi aceita com sucesso');
          this.router.navigate([`/cobaborador_acao/acao/${acao_id}/`]);
          console.log('Solicitacao aceita');
        },
        (error) => {
          console.error('Erro ao aceitar solicitacao:', error);
        }
      );
  }
  // Implementar método que troca status da solicitação
}
