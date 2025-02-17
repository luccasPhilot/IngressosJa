# IngressosJa

## Projeto de uma API REST para Compra de Ingressos

### Descrição

O **IngressosJa** é um sistema de venda de ingressos que permite o gerenciamento de usuários, administração de diferentes tipos de ingressos e controle de compras realizadas. O sistema assegura que cada transação seja registrada corretamente e que o estoque de ingressos seja atualizado em tempo real.

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Mongoose** (para persistência de dados)
- **Mustache** (para renderização da interface web)
- **JWT** (para autenticação de usuários)

## Configuração do Ambiente

O projeto contém um arquivo `.env` com as variáveis de ambiente necessárias. Certifique-se de configurar corretamente suas credenciais antes de executar o sistema.

Crie um banco de dados MongoDB e troque sua URL, USER e PASSWORD

### Instalação

```
git clone https://github.com/luccasPhilot/IngressosJa
cd IngressosJa
npm install
```

### Execução

```
npm start
```

## Funcionalidades da API REST

### 1. Gerenciamento de Usuários

- Cadastro de usuários
- Autenticação via token JWT

### 2. Gestão de Tipos de Ingressos

- CRUD completo (Criação, Leitura, Atualização e Exclusão)
- Cada ingresso possui:
  - Nome
  - Preço
  - Quantidade disponível

### 3. Venda de Ingressos

- Usuários logados podem adquirir ingressos
- Suporte para múltiplos ingressos de diferentes tipos em uma única compra

## Funcionalidades da Interface Web

### 1. Login

- Interface para autenticação de usuários
- Suporte a login via token JWT

### 2. Histórico de Compras

- Exibição dos ingressos adquiridos pelo usuário

### 3. Visualização de um Ingresso

- Exibição individual de cada ingresso adquirido

## Regras de Negócio

- **Estoque:** Uma compra não pode ser concluída se a quantidade solicitada exceder o estoque disponível.
- **Validação de Usuários:** Apenas usuários autenticados podem realizar compras.
- **Autonomia Administrativa:** Apenas administradores podem criar ou editar tipos de ingressos.
- **Política de Cancelamento:** Compras não podem ser canceladas após a conclusão.

**Autor:** Luccas Philot

