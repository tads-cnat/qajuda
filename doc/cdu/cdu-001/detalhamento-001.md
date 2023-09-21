# CDU001. Autorizar voluntário em ação

- **Ator principal**: Responsável	
- **Atores secundários**: Voluntário, colaborador
- **Resumo**: Responsável da ação poderá autorizar voluntários em uma ação.
- **Pré-condição**: 
 1 - ação existir;
 2 - colaborador ser o proprietário da ação;
 3 - colaborador ter solicitado ser voluntário para participar da ação.
- **Pós-Condição**: Colaborador se torna voluntário da ação.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Responsável acessa á página com solicitações pendendetes | |  
| | 2 - Sistema exibe lista de colaboradores que solicitaram participar da ação com a foto, nome, idade, telefone e bairro |
| 3 - Responsável clica no botão para aceitar colaborador na ação | | 
| | 4 - Sistema mostra confirmação que o colaboradaor foi aceito como voluntário e notifica ao voluntário que foi aceito pelo perfil da conta|


## Fluxo Alternativo
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Responsável acessa á página com solicitações pendendetes | |  
| | 2 - Sistema exibe lista de colaboradores que solicitaram participar da ação com a foto, nome, idade, telefone e bairro |
| 3 - Responsável clica no botão para recusar voluntário na ação | | 
| | 4 - Sistema mostra confirmação que o colaborador foi recusado e notifica ao colaborador que não foi aceito com uma mensagem padrão explicando o motivo |

## Fluxo de exceção
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Responsável acessa a página com solicitações pendentes | |  
| | 2 - Sistema exibe mensagem de que não há colaboradores solicitantes |
