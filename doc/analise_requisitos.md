| Requisitos Funcionais / Requisitos Funcionais | Autorizar voluntário na ação |Voluntariar em uma ação | Visualizar Ação |Buscar ações | Criar ação | Convidar responsável para uma ação | Remover responsável de uma ação | Desvoluntariar de uma ação | Remover voluntário de uma ação | Avaliar voluntário | Avaliar ação | Gerenciar ação | Gerenciar usuário | Denunciar ação | Denunciar usuário | Criar conta | Notificar usuário | 
| -----  |  -----  | ----- |  ----- | ----- |  -----  | ----- |  -----  | ----- |  -----  | ----- |  -----  | ----- |  -----  | ----- |  -----  | ----- |  ----- |
| Autorizar voluntário na ação       | 0    | 1    | 0 | 0 | 0    | 0    | 1000 | 1    | 1000 | 0 | 0 | 1000 | 0    | 0 | 0    | 0 | 0 |
| Voluntariar em uma ação            | 1    | 0    | 0 | 0 | 0    | 0    | 0    | 1000 | 1    | 0 | 0 | 0    | 0    | 0 | 0    | 0 | 0 |
| Visualizar Ação                    | 0    | 0    | 0 | 0 | 0    | 0    | 0    | 0    | 0    | 0 | 0 | 0    | 0    | 0 | 0    | 0 | 0 |
| Buscar ações                       | 0    | 0    | 0 | 0 | 0    | 0    | 0    | 0    | 0    | 0 | 0 | 0    | 0    | 0 | 0    | 0 | 0 |
| Criar ação                         | 0    | 0    | 0 | 0 | 0    | 1000 | 0    | 0    | 0    | 0 | 0 | 1000 | 0    | 0 | 0    | 0 | 0 |
| Convidar responsável para uma ação | 0    | 0    | 0 | 0 | 1000 | 0    | 1    | 0    | 0    | 0 | 0 | 1000 | 0    | 0 | 0    | 0 | 0 |
| Remover responsável de uma ação    | 1000 | 0    | 0 | 0 | 0    | 1    | 0    | 0    | 0    | 0 | 0 | 1000 | 0    | 0 | 0    | 0 | 0 |
| Desvoluntariar de uma ação         | 1    | 1000 | 0 | 0 | 0    | 0    | 0    | 0    | 1    | 0 | 0 | 0    | 0    | 0 | 0    | 0 | 0 |
| Remover voluntário de uma ação     | 1000 | 1    | 0 | 0 | 0    | 0    | 0    | 1    | 0    | 0 | 0 | 1000 | 0    | 0 | 0    | 0 | 0 |
| Avaliar voluntário                 | 0    | 0    | 0 | 0 | 0    | 0    | 0    | 0    | 0    | 0 | 0 | 0    | 0    | 0 | 0    | 0 | 0 |
| Avaliar ação                       | 0    | 0    | 0 | 0 | 0    | 0    | 0    | 0    | 0    | 0 | 0 | 0    | 0    | 0 | 0    | 0 | 0 |
| Gerenciar ação                     | 1000 | 0    | 0 | 0 | 1000 | 1000 | 1000 | 0    | 1000 | 0 | 0 | 0    | 0    | 0 | 0    | 0 | 0 |
| Gerenciar usuário                  | 0    | 0    | 0 | 0 | 0    | 0    | 0    | 0    | 0    | 0 | 0 | 0    | 0    | 0 | 1000 | 0 | 0 |
| Denunciar ação                     | 0    | 0    | 0 | 0 | 0    | 0    | 0    | 0    | 0    | 0 | 0 | 0    | 0    | 0 | 0    | 0 | 0 |
| Denunciar usuário                  | 0    | 0    | 0 | 0 | 0    | 0    | 0    | 0    | 0    | 0 | 0 | 0    | 1000 | 0 | 0    | 0 | 0 |
| Criar conta                        | 0    | 0    | 0 | 0 | 0    | 0    | 0    | 0    | 0    | 0 | 0 | 0    | 0    | 0 | 0    | 0 | 0 |
| Notificar usuário                  | 0    | 0    | 0 | 0 | 0    | 0    | 0    | 0    | 0    | 0 | 0 | 0    | 0    | 0 | 0    | 0 | 0 |


## Documentação
| Conflito                                     | Técnica Aplicada	            | Descrição                                                                                                             |	Solução                                     | 
| -----                                        |  -----                       | -----                                                                                                                 | -----                                       |
| Autorizar voluntário × Voluntariar em ação   | Compromisso                  |	Requisitos opostos: "Autorizar" implica aprovação externa, enquanto "Voluntariar" sugere autossuficiência do usuário.	| Voluntários com histórico positivo podem se inscrever diretamente e Novos voluntários exigem autorização manual. |
| Autorizar voluntário × Desvoluntariar        | Acordo                       |	Se um voluntário autorizado desiste, a autorização torna-se redundante.	                                              | Desvoluntariar invalida automaticamente a autorização e Notificar o responsável sobre a desistência.               |
| Voluntariar × Remover voluntário             | Imposição                    | Tensão entre autonomia do usuário (voluntariar) e controle do gestor (remover).	                                      | Remoção só é permitida com justificativa documentada (ex.: violação de regras) e Voluntário pode recorrer a um mediador.     |
| Desvoluntariar × Remover voluntário          | Análise de alternativas	    | Ambos levam à saída do voluntário, mas com origens distintas (autoiniciada × forçada).                              	| Registrar motivo da saída (autoexclusão ou remoção) e Bloquear reingresso imediato se removido por má conduta. |
| Convidar responsável × Remover responsável   | Votação                      |	Convidar e remover responsáveis podem gerar instabilidade na gestão da ação.                                     	    | Remoção exige aprovação por maioria dos demais responsáveis e Convidar não requer consenso.               |
