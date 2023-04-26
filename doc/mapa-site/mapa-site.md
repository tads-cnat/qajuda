# Mapa do Site

Obs.: propõem-se a utilização de alguma ferramenta que possibilite a representação textual do diagrama. Como o Seguinte exemplo:

```mermaid
flowchart TD
    A[Página Inicial] --- B[Login]
    A[Página Inicial] --- C[Cadastro]
    C[Cadastro] --- B[Login]
    A --- D[Detalhe de uma ação]
    B --- D[Detalhe de uma ação]
    B --- E[Criar uma ação]
    D --- F[Inscrever-se na ação]
```
