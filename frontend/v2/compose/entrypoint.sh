#!/bin/sh

# Substitui variáveis de ambiente no arquivo de configuração do nginx
envsubst '${API_URL}' < /etc/nginx/nginx.conf.template > /etc/nginx/conf.d/default.conf

# Executa o nginx
exec "$@"