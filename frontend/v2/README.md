
# QAjuda - React Frontend

Este é um projeto front-end baseado em React.
## Como rodar o projeto 
1. **Entre no diretório**

Antes de iniciar, certifique-se de ter o Node.js e o npm instalados em sua máquina. Entre no diretório do projeto frontend.

Partindo da raíz do repositório execute:

```bash
cd frontend/v2
```

2. **Instalação das dependências** 

Antes de iniciar, certifique-se de ter o Node.js e o npm instalados em sua máquina. Em seguida, execute o seguinte comando na raiz do projeto para instalar todas as dependências necessárias:

```bash
npm install
``` 

3. **Executar em modo de desenvolvimento** 

Para executar o projeto em modo de desenvolvimento, utilize o seguinte comando:

```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento Vite. O aplicativo será acessível em `http://localhost:5173`. 

4. **Construir o projeto para produção** 

Se desejar criar uma versão otimizada do aplicativo para implantação, execute o seguinte comando:

```bash
npm run build
```

Isso compilará o projeto utilizando o TypeScript e, em seguida, criará uma versão otimizada do aplicativo na pasta `dist`. 

5. **Executar linting** 

Para garantir a consistência do código e seguir as práticas recomendadas, você pode executar o linting através do seguinte comando:

```bash
npm run lint
```

Isso executará o ESLint em todos os arquivos TypeScript e JSX no projeto, aplicando as regras definidas no arquivo de configuração `.eslintrc.js`. 

6. **Visualizar a versão de produção localmente** 

Para visualizar a versão de produção do aplicativo localmente, você pode usar o comando:

```bash
npm run preview
```

Isso servirá a versão de produção do aplicativo localmente, permitindo que você o visualize antes de implantá-lo em um servidor. 


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
