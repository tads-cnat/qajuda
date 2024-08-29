FROM node:18 AS build


# Define diretório de trabalho como /app
WORKDIR /app

# Copia só o package.json com a lista de dependencias que precisam ser instaladas
COPY package.json .

# Instala só as dependencias (criando o node_modules) usando o yarn de acordo com o especificado no package.json
RUN yarn install

# Copia o resto dos arquivos para realizar o build
COPY . .

# Executa o build
RUN yarn run build

# Usa uma imagem pronta com nginx rodando
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Copia os arquivos do build da primeira imagem para o diretório publico do nginx na segunda imagem
COPY --from=build /app/dist .

# Copia o arquivo de configuração do nginx para o diretório de configuração do nginx na segunda imagem

COPY ./compose/nginx.conf /etc/nginx/nginx.conf.template

# Adiciona o script de substituição
COPY ./compose/entrypoint.sh /entrypoint.sh
RUN chmod +x ./entrypoint.sh

EXPOSE 80

ENTRYPOINT [ "./entrypoint.sh" ]

CMD ["nginx", "-g", "daemon off;"]
