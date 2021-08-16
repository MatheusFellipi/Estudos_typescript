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

## Solid

E para a organização de projeto

- S
  - SRP
    - Single Responsabilidade Principle (Principio da Responsabilidade única)
- O
  - OCP
    - Open-Closed Principle (Principio aberto/fechado)
- L
  - LSP
    - Liskov Substitution Principle (Principio de substituição de liskov)
- I
  - ISP
    - Interface Segregation Principle (Principio de Segregação de interface)
- D
  - DIP
    - Dependency Inversion Principle (Principio da inversão de dependência)

* aplicado singleton
  - nao vai permite instância varias da mesma classe garantido que tenha so uma instância da classe

## swagger-ui-express

a dependência para criar um documentação para aplicação desenvolvida

## usando Docker

Uso de container para a execução de banco de dados ou ate mesmo a aplicação

- configura o DockerFile da forma que deseja
- no cmd do local do projeto que localiza o dockerFile
- executar o dockerFile

```bash
  docker build -t <nome da image> .

```

## usando o typeorm

- e um orm para facilita a construção do banco de dados

## tsyringe

- vai injeta de forma automático os repositórios e os use case as independência

## aplicando o teste

- Teste Unicário

  - Teste de funcionalidade do sistema
  - nao faz teste de banco e de api externo
  - mas teste as regras de negócios

- Teste de Integração
  - Testar dos os fluxos da aplicação
  - integração com banco de dados
  - serviços externo

TDD - Test Driven Development
