## Dicionário de dados

Tabela: Colaborador  
Descrição: Contém os dados dos colaboradores
| Nome | Descrição | Tipo de dados | Tamanho | Restrições de Integridade |
| ----- | ----- | ----- | ----- | ----- | 
| id | número de identificação do usuário | int | | pk |
| usuario | nome de identificação do usuário | varchar | 15 | not null |
| senha | senha do usuário | varchar | 15 | not null |
| email | email do usuário | varchar | 50 | not null |
| first_name | primeiro nome do usuário | varchar | 15 | not null |
| last_name | sobrenome nome do usuário | varchar | 15 | not null |
| date_joined | data de inscrição no sistema | datetime | | not null |
| data_nasc | data de nascimento do usuário | datetime | | not null |
| telefone1 | número principal de telefone do usuário | varchar | 11 | not null |
| telefone2 | número secundário de telefone do usuário | varchar | 11 |  |
| cidade | cidade do usuário | varchar | 15 | not null |
| bairro | bairro do usuário | varchar | 30 |  |
| bio | descrição do usuário em seu perfil | varchar | 100 | not null |

Tabela: Acao  
Descrição: Contém as informações sobre as ações de voluntariado
| Nome | Descrição | Tipo de dados | Tamanho | Restrições de Integridade |
| ----- | ----- | ----- | ----- | ----- | 
| id | número de identificação das preferências do usuario | int | | pk |
| local | indica local da ação | varchar | 100 | not null |
| max_voluntarios | indica a quantidade máxima da capacidade da ação | int | |  |
| url | apresenta site/rede social da ação/instit. | varchar | 200 |  |
| status | indica status da ação | int | | not null |
| nome | nome da ação | varchar | 100 | not null |
| tema | indica qual tema representa a ação | varchar | 20 | |
| criada_em | data de criação da ação virtual no sistema | datetime | | not null |
| descricao | detalha informações da ação | varchar | 200 | not null |
| inicio | data de início | datetime | | not null |
| fim | data de finalização | datetime | | not null |
| categoria | indica (tabela) categoria que se enquadra a ação | int | | fk |
| criador | indica usuario criador (tabela Usuario) | int | | fk |

Tabela: Colaborador_acao  
Descrição: 
| Nome | Descrição | Tipo de dados | Tamanho | Restrições de Integridade |
| ----- | ----- | ----- | ----- | ----- | 
| id | número de identificação do colaborador_acao | int | | pk |
| id_acao | identificacao da acao (tabela acao) | int | | fk |
| id_colaborador | identificacao da colaborador (tabela colaborador) | int | | fk |
| convite | status do convite | int | | |
| data_convite | data do convite | datetime | | not null |
| data_solicitacao | data da solicitação | datetime | | not null |
| solicitacao | status da solicitação | int | | |
| data_responsavel | data que se tornou responsavel | datetime | | not null |
| responsavel | status do responsavel | int | | |
| criador | status do criador | int | | |

Tabela: Categoria  
Descrição: Contém os tipos em que se enquadram as ações de voluntariado, como mutirões, aulas, etc.
| Nome | Descrição | Tipo de dados | Tamanho | Restrições de Integridade |
| ----- | ----- | ----- | ----- | ----- | 
| id | número de identificação do usuário | int | | pk |
| nome | tipo de categoria | varchar | 100 | not null |

Tabela: Prefencia  
Descrição: Contém as categorias e temas de ações de voluntariado de interesse do usuário
| Nome | Descrição | Tipo de dados | Tamanho | Restrições de Integridade |
| ----- | ----- | ----- | ----- | ----- | 
| id | número de identificação das preferências do usuário | int | | pk |
| id_colaborador | categoria de interesse (tabela Categoria) | int | | fk |
| id_categoria | refere-se ao id do usuário (tabela Usuario) | int | | fk |

Tabela: Foto  
Descrição: Contém dados da foto da ação
| Nome | Descrição | Tipo de dados | Tamanho | Restrições de Integridade |
| ----- | ----- | ----- | ----- | ----- |
| id | número de identificação das preferências do usuario | int | | pk |
| id_acao | ação de voluntariado (tabela Acao) | int | | fk |
| foto | foto da ação | varchar | 200 | not null |

Tabela: Notificacao  
Descrição: Contém os dados de uma notificação
| Nome | Descrição | Tipo de dados | Tamanho | Restrições de Integridade |
| ----- | ----- | ----- | ----- | ----- |
| id | número de identificação das notificações | int | | pk |
| titulo | titulo da notificação | int | | fk |
| mensagem | mensagem enviada para colaborador | int | | fk |
| id_colaborador_acao | indica colaborador_acao (Tabela colaborador_acao)da notificação | int | | fk |
