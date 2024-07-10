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

# Copia os arquivos do build da primeira imagem para o diretório publico do nginx na segunda imagem
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

# Abre o nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]