import { Component, OnInit } from '@angular/core';
import { Solicitacao } from 'src/app/models/solicitacao';
import { SolicitacoesService } from 'src/app/services/solicitacoes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aprovarvoluntario',
  templateUrl: './aprovarvoluntario.component.html',
  styleUrls: ['./aprovarvoluntario.component.css']
})
export class AprovarvoluntarioComponent implements OnInit{
  solicitacoes: Solicitacao[] = [];
  loading: boolean = true;

  constructor(private service: SolicitacoesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idString = params.get('id');
      if (idString !== null) {
        const id = +idString; // '+' converte o parâmetro para número
        this.service.getSolitacoes(id).subscribe(
          data => {
            this.solicitacoes = data;
            console.log(data);
            this.loading = false; // Definir como falso quando os dados foram carregados
          },
          error => {
            console.error('Erro ao obter solicitações:', error);
            this.loading = false; // Definir como falso em caso de erro
          }
        );
      } else {
        console.error('ID da ação não encontrado na rota.');
      }
    });
  }


  calcularIdade(dataNascimento: Date):number {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    if (hoje.getMonth() < nascimento.getMonth() || (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return idade;
  }
  // Implementar método que troca status da solicitação
}
