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


## Checklist de Validação de Requisitos Funcionais
### 1. Definição e Estrutura dos Requisitos
- [ ] 1.1 – Os requisitos estão documentados em um formato padronizado (ex: ID, nome, descrição, prioridade, ator)? </p>

### 2. Identificação e Unicidade
- [ ] 2.1 – Cada requisito possui um identificador único (ex: RF-001, RF-002)?
- [ ] 2.2 – Cada declaração de requisito define apenas um requisito? (Ex: Evitar frases como "O sistema deve criar e editar ações")
- [ ] 2.3 – Os requisitos estão livres de conjunções (e, ou, mas) que possam indicar múltiplas funcionalidades?

### 3. Clareza e Precisão
- [ ] 3.1 – Cada requisito está escrito de forma clara, concisa e sem ambiguidade?
- [ ] 3.2 – O requisito admite apenas uma interpretação? (Ex: "Visualizar Ação" especifica se é para todos ou apenas voluntários participantes?)
- [ ] 3.3 – Todos estão em um nível de detalhamento consistente? (Ex: "Criar ação" define campos obrigatórios?)
- [ ] 3.4 – Livre de erros gramaticais e de conteúdo?

### 4. Necessidade e Relevância
- [ ] 4.1 – Cada requisito especifica uma necessidade real, desejo ou obrigação? (Ex: "Denunciar usuário" tem justificativa de segurança?)
- [ ] 4.2 – Há requisitos que são supérfluos ou duplicados? (Ex: "Desvoluntariar" vs. "Remover voluntário")

### 5. Consistência e Conflitos
- [ ] 5.1 – Existem requisitos em conflito entre si? (Ex: "Autorizar voluntário" permite voluntariar sem aprovação?)
- [ ] 5.2 – Há contradições nas descrições? (Ex: "Gerenciar ação" inclui excluir, mas não há requisito para "Excluir ação"?)
- [ ] 5.3 – O requisito faz sentido sozinho ou depende de outro para ser entendido? (Ex: "Avaliar voluntário" requer que o voluntário já esteja alocado?)
- [ ] 5.4 – Requisitos relacionados estão agrupados ou referenciados? (Ex: "Voluntariar em ação" e "Remover voluntário")

### 6. Completude da Declaração
- [ ] 6.1 – Cada requisito é uma sentença completa? (Ex: "O sistema deve permitir que o usuário busque ações por localidade e data.")
- [ ] 6.2 – As informações estão totalmente contidas no requisito, sem necessidade de buscar em outros lugares?
- [ ] 6.3 – Existem requisitos implícitos não declarados? (Ex: "Notificar usuário" exige um sistema de notificação preexistente?)
- [ ] 6.4 – Todos os dados de entrada/saída estão definidos? (Ex: "Avaliar ação" inclui nota e comentário?)

### 7. Glossário e Terminologia
- [ ] 7.1 – A lista de requisitos utiliza apenas termos do glossário? (Ex: "Ação" está definida como "evento voluntário com data e local"?)
- [ ] 7.2 – Há termos que deveriam ser adicionados ao glossário para evitar ambiguidades? (Ex: "Responsável" é um usuário com perfil específico?)

### 8. Legibilidade e Objetividade
- [ ] 8.1 – Uma pessoa que não elaborou os requisitos consegue entendê-los claramente?
- [ ] 8.2 – Alguém sem familiaridade com o projeto entenderia o que deve ser implementado?

### 9. Validação Técnica
- [ ] 9.1 – Os requisitos são testáveis? (Ex: "Buscar ações" pode ser validado com critérios de aceitação?)
- [ ] 9.2 – Há pré-condições definidas? (Ex: Para "Criar ação", o usuário precisa ser um administrador?)
- [ ] 9.3 – Requisitos complexos estão divididos em subcasos? (Ex: "Gerenciar usuário" inclui criar, editar e desativar?)

## Principais Violações da Checklist
| Requisito                  | 	 Critérios Violados	  | Risco                                                         |
| ---------                  |   ------               | -----                                                         |
| Gerenciar ação/usuário     |	 3.3, 6.1, 8.1        |	Implementação inconsistente ou incompleta.                    |
| Notificar usuário          |   5.3, 6.4, 9.1	      | Notificações podem não ser acionadas corretamente.            |
| Avaliar voluntário/ação    |	3.1, 6.4, 9.1         |	Critérios de avaliação subjetivos ou não implementados.       |
| Desvoluntariar vs. Remover |	2.2, 5.1	            | Duplicação de funcionalidade ou lógica conflitante.           |
| Convidar responsável       |	6.4, 7.1              |	Fluxo de convite incompleto ou não funcional.                 |
| Denunciar ação/usuário     |	3.1, 6.4              |	Mecanismo de denúncia ineficiente ou sem tratamento definido. |

## Como Corrigir?
1. Dividir requisitos amplos:
  - Ex: "Gerenciar ação" → "Editar ação", "Cancelar ação", "Arquivar ação".
2. Adicionar pré-condições e regras:
  - Ex: "Notificar usuário quando um voluntário for removido por um responsável".
3. Unificar termos redundantes:
  - Ex: Fundir "Desvoluntariar" e "Remover voluntário" em um único requisito com dois fluxos.
4. Especificar critérios:
  - Ex: "Avaliar ação deve incluir nota (1-5) e comentário opcional, visível apenas para o responsável".
