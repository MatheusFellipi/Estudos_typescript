## Estudo de desenvolvimento com typescript

- e possível coloca tipo nas informação que um função pode receber
- facilitar na manutenção de código

- para adicionar o typescript

```bash
  yarn add typescript -D
```

## Padronização

utilizando o prettier e o eslint e possível definir um padronização de projeto

utilizando o eslint estou pegando o estilo da airbnb

- fazer a instala o eslint

```bash
  yarn add eslint -D
```

- configurar o eslint

```bash
  yarn eslint --init
```

- No prettier e so para definir as aspa que iremos usar

## Conceito de repositórios

repositórios sao camada responsável pela manipulação de dados na aplicação no banco de dados.

- as rota nao precisa saber as informação que tem dentro da categoria o único que tem qu conhecer os modelos sao os repositórios nao a rotas

- podemos usa o conceito DTO `Data transfer objeto`
  - um objeto que que seja responsável entra as camadas.
