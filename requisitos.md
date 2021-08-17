# Cadastro de carro

**RF**

- dever ser possível cadastrar um carro
- deve ser possível listar todas as categoria
  **RNF**

**RN**

- nao deve ser possível cadastrar um carro com a placa ja existe
- nao e possível alterar a placa de um carro ja cadastra
- o carro deve ser cadastrar por padrão, como disponível
- Somente o administrado faz fazer o cadastro de carro

# Listagens de Carro

**RF**

- dever ser possível listar todos os carros disponível
- dever ser possível listar todos os carros disponível pela categoria
- dever ser possível listar todos os carros disponível marca
- dever ser possível listar todos os carros disponível pelo nome do carro

**RNF**

**RN**

- usuários noa precisa esta logado no sistema

# Cadastro de especificação no carro

**RF**

- Deve ser possível cadastrar uma especificação para o carro
- dever ser possível listar todos os especificação
- dever ser possível listar todos os carros

  **RN**

- o carra precisa existe, nao e possível cadastrar especificação para o carro
- nao deve ser possível cadastrar um especificação existente para o mesmo carro
- Somente o administrado faz fazer o cadastro de especificação

# cadastro de imagens do carros

**RF**

- Deve ser possível cadastrar uma especificação para o carro cadastrar a imagens do carro

**RNF**

- Utilizar o multer para upload de arquivos

**RN**

- o usuários deve poder cadastrar mais de uma imagens para o mesmo carro
- Somente o administrado faz fazer o cadastro

# Aluguel de carro

**RF**

- deve ser possível cadastrar um aluguel

**RNF**

**RN**

- o aluguel deve ter duração minima de 24h.
- nao ser deve possível cadastrar um novo aluguel caso ja exista um aberto para o usuário
- nao ser deve possível cadastrar um novo aluguel caso ja exista um aberto para o carro
