# Documento de Visão

## Histórico de Revisões

| Data                |  Versão             |          Descrição  |  Autores            |
| -----------------   | -----------------   | -----------------   | -----------------   |
| 25/04/2023 | 1.0 | Primeira versão | Ana Célia Baía Araújo, Felipe Xavier de Carvalho, José Vilanir de Souza Brito Neto, Rômulo da Silva Cavalcanti e Yuri Thairony Feitosa de Oliveira | 


## 1. Objetivo do projeto

Criar uma plataforma para conectar voluntários com projetos comunitários.

## 2. Descrição do problema

|     |      |
| --- | --- |
| **Problema**            | não existir um canal de comunicação específico para promover trabalhos voluntários, com credibilidade e confiabilidade, a partir da conexão entre pessoas e instituições interessadas e ações voluntárias interessadas em voluntariado |
| **Afeta**               | interessados em promover e em participar de ações de voluntariado |  
| **Impacta**             | várias pessoas deixam de colaborar com e/ou de receber ações sociais |
| **Solução**             | existir uma plataforma que permita que interessados e instituições relacionadas a trabalho voluntário possam se articular em ações  | 

## 3. Descrição dos usuários 

| Nome                |  Descrição          |   Responsabilidade  |
| -----------------   | -----------------   | -----------------   |
| Admin | Os admin serão usuários com permissões para alterar ações e perfis de usuários, e todos os outros requisitos | Gerenciar ações e usuários - Moderar o conteúdo postado - Validar denúncias sobre ações e usuários - Realizar manutenções e melhorias no sistema |
| Usuário  | Os usuários cadastrados com login, que não são admin, poderão utilizar a plataforma para se voluntariar, interagir com outros usuários e criarem ações voluntárias nas quais eles serão proprietários/responsáveis. | Criar ações, se tornando proprietários da ação; Gerenciar os usuários das suas ações; Interagir e visualizar detalhes sobre categorias, interesses, ações que já participaram, outras informações disponíveis de outros usuários e ações; Inscrever-se em ações.  |
| Voluntário   | Os voluntários podem fazer determinadas ações, como por exemplo, avaliar uma ação.   | Os voluntários são os responsáveis por fazer determinadas ações que estão ligadas a ação que ele se inscreveu. | 
| Visitante   | Os usuários que podem visualizar o site mas que, por não terem realizado cadastro ainda, não podem se voluntariar ou criar ações voluntárias na plataforma.   | Os usuários não cadastrados podem: - Visualizar ações e dados não sensíveis das ações - Se cadastrar na plataforma - Compartilhar ações existentes | 

## 4. Descrição do ambiente dos usuários

A plataforma terá como página inicial do usuário cadastrado uma visão de ações sugeridas, visão de outros voluntários para entrar em contato e opção de ver as ações em que já se voluntariou. Na plataforma, espera-se que o usuário possa interagir com outros voluntários, pesquisar ações tanto pelos proprietários quanto por categorias e interesses temáticos, localidade e período de execução, além de cadastrar ações voluntárias. A plataforma poderá ter suas ações e página do perfil de usuários compartilhadas com botões de compartilhamento com as redes sociais mais utilizadas atualmente.

## 5. Principais necessidades dos usuários

Com base no formulário aplicado, que teve 94 respondentes, definimos as necessidades dos usuários a partir das seguintes análises de respostas, de forma que o produto a ser desenvolvido deverá superá-las  e estar alinhado aos fatores que percebemos poderão levar os usuários a utilizar nossa plataforma. Contatamos que:
65% das pessoas que responderam já foram voluntários
51% acreditam ser difícil achar ações voluntárias para ajudar
95% consideram participar de alguma ação voluntária se forem apresentados
E como principais fatores para escolha em participar de uma ação voluntária:
73,4% “conhecer e confiar no projeto”
59,6% “Ajudar pessoas/animais que precisam de ajuda”
56,4% “Conhecer a história de quem estão ajudando”


## 6. Alternativas concorrentes

Atualmente, redes sociais como “Instagram” são utilizadas por seus usuários para diversas finalidades, incluindo o público interessado em trabalhos voluntários, sendo necessário que quaisquer outras propostas, como esta plataforma, possam se conectar de alguma forma com esses canais (botões para compartilhamento de ações, plugins, etc…). Existem plataformas específicas para tal como uma das maiores aqui no Brasil, a “Atados” (focada em trabalhos específicos, com seção de ações, mas é ocasional, serve mais como banco de voluntários para ONGs cadastradas) e outra “Padrinhonota10”, voltada para apadrinhamento de crianças e jovens em abrigos e afins, porém tem pouca aplicação para outros tipos de voluntariado. Algumas plataformas como “Vakinha” online ou “Catarse” promovem financiamento coletivo, muito utilizado em campanhas para arrecadação financeira, porém são muito limitadas à outros tipos de trabalhos.

## 7. Visão geral do produto

A Plataforma para Trabalho Voluntários será um produto de acesso para toda a sociedade, com recursos de usabilidade que considerem premissas de acessibilidade e interface intuitiva. A proposta é integrar e proporcionar um ambiente para interação entre indivíduos entre si, comunidades e instituições como OSCIPs/ONGs que desenvolvam/tenham interesse em trabalhos voluntários. O produto poderá dispor aos usuários um catálogo de ações e informações sobre esses trabalhos, que deverá ser continuamente atualizado a partir do uso da Plataforma, de forma que a divulgação de ações, pela integração com redes sociais e outros links, poderá atrair novos usuários e ampliar as redes de atuação dos trabalhos voluntários propostos.

## 8. Requisitos funcionais

| Código              |  Nome               |          Descrição  |  Prioridade         |
| -----------------   | -----------------   | -----------------   | -----------------   |
|  F01  |  Efetuar Login  |  O admin/usuário tem acesso ao sistema.  | -  |
| F02  | Cadastrar Ação | O usuário cadastra uma ação de trabalho voluntário  |  - |
| F03  | Criar Ações | Usuário cria ações | - |
| F04  | Cadastrar-se | Visitante pode se cadastrar na plataforma | - |
| F05  | Criar Comentário | Usuário que participou da ação pode criar comentário | - |
| F06  | Gerenciar Ações | admin gerencia ações disponíveis e usuário gerencia a própria ação (atualizar e remover) | - | 
| F07  | Gerenciar Usuários | Admin gerencia usuários da plataforma (atualizar e remover) | - |
| F08  | Remover Comentários | Admin ou usuário removem comentários disponíveis | - |
| F09  | Buscar Ações | Visitantes e usuários pesquisam ações disponíveis | Alta | 
| F10  | Visualizar Ações | Visitantes e usuários podem visualizar ações disponíveis | Alta | 
| F11  | Visualizar Comentários | Visitantes e usuários podem visualizar comentários disponíveis das ações | - |
| F12  | Avaliar Ação | Permite que voluntários que participaram avaliem (com critérios a definir como resultados obtidos, pontualidade, efetividade, etc) a ação ocorrida | Média |
| F13  | Denunciar Ação | Usuário alerta os admins sobre questões de segurança da ação elencadas na RN06 | - |
| F14  | Denunciar Usuário | Usuário alerta os admins sobre questões de segurança elencadas na RN07 | - |
| F15  | Autorizar voluntário em ação | Usuário proprietário da ação aceita os voluntários que se candidataram a participar da ação | Alta |
| F16  | Cadastro do Voluntário em uma ação | Usuário pode solicitar aos proprietários da ação para participar | Alta |
| F17  | Efetuar Logout | Usuário sai do sistema | - |



## 9. Requisitos não-funcionais

| Código              |  Nome               |          Descrição  |  Categoria          |  Classificação      |
| -----------------   | -----------------   | -----------------   | -----------------   | -----------------   |
| NF01 | Segurança das informações pessoais | Os dados pessoais, endereços e outras informações dos bancos de dados da plataforma deverão estar asseguradas segundo a Lei Geral de Proteção de Dados Pessoais (LGPD). | Segurança | Obrigatório |
| NF02 | Interface acessível | Espera-se que a interface e o design sejam construídos a partir de fontes, tamanhos, imagens, ícones, esquemas de cores  e outras ferramentas que possibilitem inclusão de pessoas com problemas de visão (ferramenta de lupa, alto contraste, leitura em voz alta, etc), prezando por uma comunicação clara com os usuários | Usabilidade | Desejável |
| NF03 | Usabilidade da plataforma | Espera-se que o uso da plataforma seja intuitivo para que vários tipos de usuários (iniciais, intermediários, avançados, admin) possam navegar pelo sistema sem grandes dificuldades | Usabilidade | Desejável |
| NF04 | Confiabilidade e credibilidade | Serão estabelecidos protocolos para que os usuários tanto possam denunciar ações e/ou usuários suspeitos, como será possível um sistema de avaliação entre voluntários na plataforma sobre confiança e credibilidade das ações | Segurança | Obrigatório|

## 10. Regras de negócio

| Código | Nome | Descrição |
| ------------- | ------------- | ------------- |
| RN01 | Limitação de cadastro de ações | Um usuário não pode criar mais de três ações |
| RN02 | Acesso a ações | Em ações "fechadas" (não-públicas), um voluntário precisa ter seu acesso permitido pelo criador da ação para ver informações sensíveis sobre ela. |
| RN03 | Requisito para avaliar ação | Um voluntário só pode avaliar uma ação em que participou. |
| RN04 | Impedimento de spamming por denúncia | Um usuário não pode fazer mais de 3 denúncias ao mesmo usuário/evento na mesma semana.
| RN05 | Impedimento de spamming por comentários | Um usuário não pode comentar mais de 3 vezes na mesma hora em uma ação. | 
| RN06 | Critérios de denúncia do ação | Inverdade da proposta da ação,  entre outros. | 
| RN07 | Critérios de denúncia do usuário | Discurso de ódio, comportamento suspeito, entre outros. | 
