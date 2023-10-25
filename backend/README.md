Manual do desenvolvedor
======================

Sobre
-----

Backend por trás da aplicação web QAjuda.

Tabela de conteúdos
-------------------

   * [Sobre](#sobre)
   * [Tabela de conteúdos](tabela-de-conteudos)
   * [Instalação](#instalação)
      * [Rodando localmente](#rodando-localmente) 
   * [Tecnologias](#tecnologias)


Instalação 
----------

Antes de começar você precisa ter instalado algumas ferramentas:
[Git](https://git-scm.com), [Python](https://python.org/).
Além disso é bom possuir algum editor de código, como o [VSCode](https://code.visualstudio.com/)

### Rodandando localmente

```Command prompt
# Clone este repositorio
git clone https://github.com/tads-cnat/qajuda.git

# Acesse a pasta no qual você clonou o repositorio
cd qajuda

# crie o ambiente virtual do python
python -m venv venv

# Faça a ativação do ambiente virtual
venv\Scripts\activate.bat

# Instale as dependencias do projeto
pip install -r requirements.txt

# Entre na pasta raiz da aplicação
cd QAjudaBackend

# Rode o servidor 
python manage.py runserver
```

Tecnologias
-----------

- [DjangoRestFramework](https://www.django-rest-framework.org/)
- [Swagger DRF](https://www.django-rest-framework.org/topics/documenting-your-api/)
