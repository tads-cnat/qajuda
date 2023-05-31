# CDU003. - Autorizar voluntário em ação

- **Ator principal**: Voluntário
- **Atores secundários**: ...
- **Resumo**: Proprietário autoriza voluntário.
- **Pré-condição**: 1 - O usuário deve estar cadastrado no sistema como um Proprietário para determinada ação. 2 - O proprietário deve ter criado a ação para a qual está autorizando a entrada de um voluntário.
- **Pós-Condição**: Caso a ação seja privada, o voluntário deve ganhar acesso a dados não disponíveis anteriormente.

## Fluxo Principal

| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: |
| 1 - Ator abre a visualização de uma ação criada por ele | |  
|  | 2 - Sistema exibe, se houverem, requisições de participação de voluntários. |
| 3 - Ator confirma/recusa a participação de voluntário(s) e o fluxo se encerra. | |

