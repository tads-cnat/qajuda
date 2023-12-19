# Contributors

Abaixo tem-se todas as pessoas que contrinbuiram para esse projeto. Se você também quer contribuir, por favor, siga as diretrizes de contribuição e adicione seu nome a esta lista.

- [Yuri Thairony](https://github.com/ythairony)
- [Felipe Xavier](https://github.com/felipexrn)
- [Ana Celia](https://github.com/ana-celia)
- [José Vilanir](https://github.com/josevilanir)
- [Matheus Duarte](https://github.com/plmdsmatheus)
- [Rômulo da Silva](https://github.com/rommuloifrn)


## Colaboradores Especiais

- [Demóstenes Sena](https://github.com/demostenessena)
- [Marília Freire](https://github.com/mariliaafreire)


## Como Contribuir

Para contribuir com este projeto, por favor, siga estas etapas:

1. Fork o projeto
2. Crie um branch para sua contribuição: `git checkout -b nova-feature`
3. Faça suas alterações e faça commit: `git commit -m 'Adiciona nova feature'`
4. Push para o branch: `git push origin nova-feature`
5. Abra um Pull Request na branch `PDSD-Development`


Obrigado por ajudar a tornar este projeto incrível!

## Como rodar o front-end

1 - Instale o Node.js e o npm:  
Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados na sua máquina. Você pode baixar o Node.js em https://nodejs.org/, e o npm é instalado automaticamente com o Node.js.  
  
2 - Instale o Angular CLI:
O Angular CLI (Interface de Linha de Comando) é uma ferramenta útil para gerenciar projetos Angular. Você pode instalá-lo globalmente usando o seguinte comando no terminal ou prompt de comando:

`npm install -g @angular/cli`  

3 - Instale as Dependências do Projeto:
Navegue até o diretório do seu projeto (onde você clonou o repositório) usando o terminal ou prompt de comando e execute o seguinte comando para instalar as dependências do projeto listadas no arquivo package.json:

`npm install`  

4 - Inicie o Servidor de Desenvolvimento:
Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento do Angular usando o seguinte comando:

`ng serve`  

Isso iniciará o servidor de desenvolvimento e permitirá que você acesse o aplicativo em http://localhost:4200/ no seu navegador.  

5 - Acesse o Aplicativo no Navegador:  
Abra o seu navegador e vá para http://localhost:4200/ para visualizar o aplicativo Angular em execução. O Angular CLI também fornecerá informações no console sobre a compilação e eventuais erros.


## Como rodar o JSON Server para testes de requisições  

1 - Instale o JSON Server:
Se o JSON Server não estiver instalado globalmente na sua máquina, instale-o usando o seguinte comando:

`npm install -g json-server`  

2 - Inicie o JSON Server:
Navegue até o diretório onde está localizado o arquivo db.json (ou qualquer outro arquivo JSON que contenha seus dados simulados) e execute o seguinte comando para iniciar o JSON Server:

`json-server --watch src/assets/data.json`  

Certifique-se de ajustar o comando conforme necessário para corresponder ao nome do seu arquivo JSON.

3 - Acesse o Aplicativo no Navegador:  
Agora, você pode acessar o aplicativo Angular em http://localhost:4200/, e o JSON Server estará fornecendo dados simulados em http://localhost:3000/ (ou outra porta, dependendo da configuração).


