# CDU001. Autorizar voluntário em ação

- **Ator principal**: Proprietário
- **Atores secundários**: Voluntário 
- **Resumo**: Proprietário da ação poderá autorizar voluntários em uma ação.
- **Pré-condição**: 
 1 - ação existir;
 2 - usuário ser o proprietário da ação;
 3 - voluntário ter solicitado participar da ação.
- **Pós-Condição**: Não existe pós condições.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Proprietário entra na página e verifica se há solicitações pendentes | |  
| | 2 - Sistema exibe lista de voluntários que solicitaram participar da ação |
| 3 - Proprietário clica no botão para aceitar voluntário na ação | | 
| | 4 - Sistema mostra confirmação que o usuário foi aceito |
| | 5 - Sistema notifica que o usuário foi aceito |

## Fluxo Alternativo
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Proprietário entra na página e verifica se há solicitações pendentes | |  
| | 2 - Sistema exibe lista de voluntários que solicitaram participar da ação |
| 3 - Proprietário clica no botão para recusar voluntário na ação | | 
| | 4 - Sistema mostra confirmação que o usuário foi recusado |
| | 5 - Sistema notifica que o usuário não foi aceito |
