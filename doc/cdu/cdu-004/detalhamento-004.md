
# CDU004. Avaliar Ação

- **Ator principal**: Voluntário
- **Atores secundários**: ...
- **Resumo**: Voluntários que participaram podem avaliar (com critérios a definir como resultados obtidos, pontualidade, efetividade, etc) a ação ocorrida.
- **Pré-condição**: 1 - O usuário deve estar cadastrado no sistema. 2 - O usuário deve ter se cadastrado e ter sido aceito na atividade como um Voluntário.
- **Pós-Condição**: Deixa registrada uma nota/avaliação(a definir) na ação.

## Fluxo Principal

| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: |
| 1 - Voluntário seleciona uma ação que ele participou e que já foi encerrada. |  |  
|  | 2 -  Sistema exibe ação selecionada. |
| 3 - Voluntário seleciona a funcionalidade Avaliar Ação. |  |
| | 4 - Sistema exibe diversos critérios de avaliação para que o voluntário possa avaliar a ação. |
| 5 - Voluntário avalia ação. (Ver RN08). | |
| | 6 - Sistema valida, confirma e exibe avaliação ao voluntário. Caso de uso é finalizado. |

## Fluxo de Exceção - Validação de avaliação

| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: |
| 3.1 - Voluntário avalia ação. | Sistema invalida a ação, retornando ao caso de uso 3. |  
