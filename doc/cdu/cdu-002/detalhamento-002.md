# CDU002. Cadastro do Voluntário em uma ação

- **Ator principal**: Colaborador
- **Atores secundários**: Responsável, voluntário
- **Resumo**: Colaborador cadastra-se para se tornar voluntário de uma ação
- **Pré-condição**:
  1 - Existir uma ação; 2 - Ação estar ativa; 3 - Colaborador estar logado.
- **Pós-Condição**: Ser aceito pelo responsável e se tornar um voluntário

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Colaborador clica no botão para se tornar um voluntário | |  
| | 2 - Sistema exibe nova página com o termo de aceitação do colaborador, confirmando que irá disponibilizar para o responsável da ação alguns de seus dados | 
| 3 - Colaborador clica no botão para confirmar que quer ser voluntário | |  
| | 4 - Sistema registra a solicitação para aprovação e retorna para página inicial do caso de uso |


## Fluxo Alternativo (colaborador recusa enviar dados para responsável da ação) 
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Colaborador clica no botão para se tornar um voluntário | |  
| | 2 - Sistema exibe página com o termo de aceitação do colaborador, confirmando que irá disponibilizar para o responsável da ação alguns de seus dados | 
| 3 - Colaborador não clica em confirmar o envio de seus dados para o responsável | |  
