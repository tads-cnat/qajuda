# Passo a Passo para testar docker compose com banco de dados PostgreSQL

Este guia fornece instruções para testar o banco de dados PostgreSQL usando Docker.

## 1. Inicie o Contêiner

Abra o terminal a partir do diretório onde o arquivo `docker-compose.yml` está localizado e execute o seguinte comando para iniciar o contêiner em segundo plano:

```sh
docker compose up -d
```

## 2. Copie os scripts de teste de persistência

Copie os scripts para teste de persistência dos dados no banco

```sh
docker cp teste_create_insert.sql qajuda-db:/teste_create_insert.sql
```

```sh
docker cp teste_delete_drop.sql qajuda-db:/teste_delete_drop.sql
```

## 3. Insira dados no banco

Após a montagem e execução do contêiner, insira dados no banco de dados executando o comando abaixo:

```sh
docker exec -it qajuda-db psql -U qajuda -d qajudadb -f /teste_create_insert.sql
```

## 4. Verifique os dados inseridos

Conecte-se ao banco de dados do contêiner e verifique os dados inseridos com o comando:

```sh
docker exec -it qajuda-db psql -U qajuda -d qajudadb -c "SELECT * FROM qajuda_teste;"
```

## 5. Entre, saia e execute comandos no cliente PostgreSQL se necessário

Caso queira entrar no cliente PostgreSQL e executar comandos, execute:

```sh
docker exec -it qajuda-db psql -U qajuda -d qajudadb
```

Execute os comandos SQL como de costume, como `CREATE`, `INSERT`, `SELECT`, `DELETE`, `DROP`, etc.

Para sair, execute:

```sh
exit
```

## 6. Verifique o status do contêiner

Para visualizar o status dos contêineres em execução, use:

```sh
docker ps
```

## 7. Teste a persistência dos dados

Desligue e religue o contêiner para verificar a persistência dos dados:

```sh
docker compose down
docker compose up -d
```

## 8. Conecte novamente ao PostgreSQL e verifique os dados após reinício

Conecte-se novamente ao banco de dados PostgreSQL no contêiner e verifique se os dados ainda estão presentes com o comando:

```sh
docker exec -it qajuda-db psql -U qajuda -d qajudadb -c "SELECT * FROM qajuda_teste;"
```

## 9. Exclua os dados de teste do banco

Para excluir os dados da tabela e apagar a tabela de teste, execute:

```sh
docker exec -it qajuda-db psql -U qajuda -d qajudadb -f /teste_delete_drop.sql
```

## 10. Volte a máquina para o estado incial. 

Pare e apague o contêiner assim como exclua a iamgem da maquina mantendo o volume

Para parar contêiner, execute:

```sh
docker compose down
```

Para apagar o contêiner, execute:

```sh
docker ps
docker rm <id_do_container>
```

Para excluir a imagem do postgres, execute:

```sh
docker images
docker rmi <id_da_imagem>
```

---
