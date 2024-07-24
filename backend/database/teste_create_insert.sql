-- Cria da tabela de teste
CREATE TABLE qajuda_teste (
    postgres_user VARCHAR(50) NOT NULL,
    postgres_password VARCHAR(50) NOT NULL,
    postgres_db VARCHAR(50) NOT NULL
);

-- Insere valores na tabela de teste
INSERT INTO qajuda_teste (postgres_user, postgres_password, postgres_db) 
VALUES ('qajuda', 'qajuda_password', 'qajudadb');