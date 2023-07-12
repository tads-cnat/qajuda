CREATE TABLE Usuario
(
  id INT NOT NULL,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  date_joined DATE NOT NULL,
  data_nasc DATE NOT NULL,
  telefone1 VARCHAR(50) NOT NULL,
  telefone2 VARCHAR(50) NOT NULL,
  cidade VARCHAR(50) NOT NULL,
  bairro VARCHAR(50),
  bio VARCHAR(200),
  CONSTRAINT pk_usuario PRIMARY KEY (id)
);

CREATE TABLE Categoria
(
  id INT NOT NULL,
  nome VARCHAR(50) NOT NULL,
  CONSTRAINT pk_categoria PRIMARY KEY (ID)
);

CREATE TABLE Preferencia
(
  id INT NOT NULL,
  categoria INT NOT NULL,
  usuario INT NOT NULL,
  CONSTRAINT pk_preferencia PRIMARY KEY (id),
  CONSTRAINT fk_categoria FOREIGN KEY (categoria) REFERENCES Categoria(ID) ON DELETE CASCADE,
  CONSTRAINT fk_usuario FOREIGN KEY (usuario) REFERENCES Usuario(id) ON DELETE CASCADE
);

CREATE TABLE Solicitacao_status
(
  id INT NOT NULL,
  status VARCHAR(50) NOT NULL,
  CONSTRAINT pk_status PRIMARY KEY (id)
);

CREATE TABLE Acao
(
  local VARCHAR(50) NOT NULL,
  id INT NOT NULL,
  max_voluntarios INT,
  modalidade CHAR(1) NOT NULL,
  url VARCHAR(50),
  status CHAR(1) NOT NULL,
  nome VARCHAR(50) NOT NULL,
  tema VARCHAR(50),
  criada_em DATE NOT NULL,
  descricao VARCHAR(50) NOT NULL,
  inicio DATE NOT NULL,
  fim DATE NOT NULL,
  categoria INT NOT NULL,
  criador INT NOT NULL,
  CONSTRAINT pk_acao PRIMARY KEY (id),
  CONSTRAINT fk_categoria FOREIGN KEY (categoria) REFERENCES Categoria(ID) ON DELETE CASCADE,
  CONSTRAINT fk_criador FOREIGN KEY (criador) REFERENCES Usuario(id) ON DELETE CASCADE
);

CREATE TABLE Proprietario
(
  id INT NOT NULL,
  acao INT NOT NULL,
  usuario INT NOT NULL,
  CONSTRAINT pk_proprietario PRIMARY KEY (id),
  CONSTRAINT fk_acao FOREIGN KEY (acao) REFERENCES Acao(id) ON DELETE CASCADE,
  CONSTRAINT fk_usuario FOREIGN KEY (usuario) REFERENCES Usuario(id) ON DELETE CASCADE
);

CREATE TABLE Acao_foto
(
  id INT NOT NULL,
  foto VARCHAR(50) NOT NULL,
  acao INT NOT NULL,
  CONSTRAINT pk_foto PRIMARY KEY (id),
  CONSTRAINT fk_acao FOREIGN KEY (acao) REFERENCES Acao(id) ON DELETE CASCADE
);

CREATE TABLE Solicitacao
(
  id INT NOT NULL,
  acao INT NOT NULL,
  status INT NOT NULL,
  proprietario INT NOT NULL,
  voluntario INT NOT NULL,
  CONSTRAINT pk_solicitacao PRIMARY KEY (id),
  CONSTRAINT fk_acao FOREIGN KEY (acao) REFERENCES Acao(id) ON DELETE CASCADE,
  CONSTRAINT fk_status FOREIGN KEY (status) REFERENCES Solicitacao_status(ID) ON DELETE CASCADE,
  CONSTRAINT fk_proprietario FOREIGN KEY (proprietario) REFERENCES Proprietario(id) ON DELETE CASCADE,
  CONSTRAINT fk_voluntario FOREIGN KEY (voluntario) REFERENCES Usuario(id) ON DELETE CASCADE
);
