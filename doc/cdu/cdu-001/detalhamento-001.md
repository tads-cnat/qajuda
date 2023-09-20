# CDU001. Autorizar voluntário em ação

- **Ator principal**: Responsável	
- **Atores secundários**: Voluntário, colaborador
- **Resumo**: Proprietário da ação poderá autorizar voluntários em uma ação.
- **Pré-condição**: 
 1 - ação existir;
 2 - usuário ser o proprietário da ação;
 3 - voluntário ter solicitado participar da ação.
- **Pós-Condição**: Não existe pós condições.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Responsável entra na página e verifica se há solicitações pendentes | |  
| | 2 - Sistema exibe lista de voluntários que solicitaram participar da ação |
| 3 - Responsável clica no botão para aceitar voluntário na ação | | 
| | 4 - Sistema mostra confirmação que o colaboradaor foi aceito como voluntário |
| | 5 - Sistema notifica ao voluntário que foi aceito pelo perfil |

## Fluxo Alternativo
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Responsável entra na página e verifica se há solicitações pendentes | |  
| | 2 - Sistema exibe lista de voluntários que solicitaram participar da ação |
| 3 - Responsável clica no botão para recusar voluntário na ação | | 
| | 4 - Sistema mostra confirmação que o colaborador foi recusado |
| | 5 - Sistema notifica ao colaborador que não foi aceito com uma mensagem padrão explicando o motivo|
