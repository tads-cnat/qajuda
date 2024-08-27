
# QAjuda - React Frontend

Este é o projeto frontend do QAjuda, ainda está em desenvolvimento e atualizações ainda são aguardadas nas próximas semanas.


## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Verifique se você possuí a versão LTS mais recente do [NodeJS e o npm](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) instalados
- [OPCIONAL] Verifique que você está com o Docker Engine aberta e funcionando em sua máquina

## Como rodar o projeto localmente
1. **Entre no diretório**

Navegue até a pasta raíz do diretório frontend:

```bash
cd frontend/v2
```

2. **Instalação das dependências** 

Execute o seguinte comando na raiz do projeto para instalar todas as dependências necessárias:

```bash
npm install
``` 

3. **Executar em modo de desenvolvimento** 

Para executar o projeto em modo de desenvolvimento, utilize o seguinte comando:

```bash
npm run dev
```
Isso iniciará o servidor de desenvolvimento Vite. O aplicativo será acessível em `http://localhost:5173`. 


## Como rodar o projeto usando Docker

Para iniciar a aplicação usando Docker, certifique-se de que a docker engine está rodando na sua máquina e execute o seguinte comando:

```bash
docker compose -f docker-compose.local.yml up --build
``` 

Isso iniciará um servidor nginx servindo a aplicação em `http://localhost/`

> Lembre-se de esvaziar o arquivo .env no diretório raiz do projeto frontend.

## Principais Dependências 
- **React:**  Biblioteca JavaScript para criar interfaces de usuário. 
- **React Router Dom:**  Roteamento para aplicativos React. 
- **React Hook Form:**  Biblioteca para gerenciar formulários em React. 
- **Axios:**  Cliente HTTP baseado em Promises para fazer requisições. 
- **Bootstrap:**  Framework CSS para desenvolvimento rápido de interfaces. 
- **Yup:**  Biblioteca de validação de esquema. 
- **Vite:**  Servidor de desenvolvimento rápido e ferramenta de compilação. 
- **TypeScript:**  Superset JavaScript com tipagem estática opcional para aplicações JavaScript/React. 
- **ESLint:**  Ferramenta de análise de código estática para identificar padrões problemáticos no código JavaScript/TypeScript.

Certifique-se de consultar a documentação oficial de cada uma dessas dependências para obter mais detalhes sobre como usá-las em seu projeto.
