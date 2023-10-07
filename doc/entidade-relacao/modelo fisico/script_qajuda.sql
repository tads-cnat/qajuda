
-- Tabela Categoria
CREATE TABLE Categoria (
	id INT IDENTITY(1,1) PRIMARY KEY,
	nome NVARCHAR (15) NOT NULL
)


-- Tabela Colaborador
CREATE TABLE Colaborador (
	id INT IDENTITY(1,1) PRIMARY KEY,
	usuario NVARCHAR (15) NOT NULL,
	senha NVARCHAR (15) NOT NULL,
	email NVARCHAR (50) NOT NULL,
	firt_name NVARCHAR (15) NOT NULL,
	last_name NVARCHAR (15) NOT NULL,
	data_nasc DATETIME NOT NULL,
	data_joined DATETIME NOT NULL,
	telefone1 NVARCHAR (11) NOT NULL,
	cidade NVARCHAR (15) NOT NULL,
	telefone2 NVARCHAR (11) NULL,
	bio NVARCHAR (100) NULL,
	bairro NVARCHAR (30) NULL,
)


-- Tabela Prefer�ncias
CREATE TABLE Preferencias (
	id INT IDENTITY(1,1) PRIMARY KEY,
	id_colaborador INT NOT NULL,
	id_categoria INT NOT NULL,
	FOREIGN KEY (id_colaborador) REFERENCES Colaborador(id),
	FOREIGN KEY (id_categoria) REFERENCES Categoria(id)
)


-- Tabela A��o
CREATE TABLE Acao (
	id INT IDENTITY(1,1) PRIMARY KEY,
	nome NVARCHAR (100) NOT NULL,
	local NVARCHAR (50) NOT NULL,
	max_volutarios INT NULL,
	modalidade NVARCHAR (30) NOT NULL,
	url NVARCHAR (200) NULL,
	status INT NOT NULL,
	tema NVARCHAR (20) NULL,
	criada_em DATETIME NOT NULL,
	descricao NVARCHAR (200) NOT NULL,
	inicio DATETIME NOT NULL,
	fim DATETIME NOT NULL,
	id_categoria INT NOT NULL,
	FOREIGN KEY (id_categoria) REFERENCES Categoria(id)
)


-- Tabela Colaborador A��o
CREATE TABLE Colaborador_acao (
	id INT IDENTITY (1,1) PRIMARY KEY,
	id_colaborador INT NOT NULL,
	id_acao INT NOT NULL,
	convite INT NULL,
	data_convite DATETIME NOT NULL,
	data_solicitacao DATETIME NOT NULL,
	solicitacao INT NULL,
	data_responsavel DATETIME NOT NULL,
	responsavel INT NULL,
	criador INT NULL,
	FOREIGN KEY (id_colaborador) REFERENCES Colaborador(id),
	FOREIGN KEY (id_acao) REFERENCES Acao(id)
)


-- Tabela Notifica��o
CREATE TABLE Notificacao (
	id INT IDENTITY (1,1) PRIMARY KEY,
	titulo NVARCHAR (50) NOT NULL,
	mensagem NVARCHAR (200) NOT NULL,
	id_colaborador_acao INT NOT NULL,
	FOREIGN KEY (id_colaborador_acao) REFERENCES Colaborador_acao(id)
)


-- Tabela Foto
CREATE TABLE Foto (
	id INT IDENTITY (1,1) PRIMARY KEY,
	foto NVARCHAR (100) NOT NULL,
	id_acao INT NOT NULL,
	FOREIGN KEY (id_acao) REFERENCES Acao(id)
)

