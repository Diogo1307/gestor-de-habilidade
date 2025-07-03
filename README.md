# Gestor de Habilidades - README

## Sobre o Projeto
Este é um aplicativo React para gerenciar habilidades aprendidas ou em aprendizagem. O projeto permite adicionar, listar, editar, excluir e marcar habilidades como aprendidas, além de contar com um filtro de busca.

## Tecnologias Utilizadas
- React
- React Router
- Axios
- CSS puro para estilização

## Funcionalidades
- Listagem de habilidades
- Adição de novas habilidades via modal
- Edição de habilidades existentes
- Exclusão de habilidades
- Marcação de habilidades como aprendidas/não aprendidas
- Filtro de busca por nome da habilidade
- Layout responsivo seguindo o design do Figma

## Estrutura do Projeto
```
src/
  ├── components/
  │   ├── AddHabilidadeModal/
  │   ├── HabilidadeItem/
  │   ├── HabilidadesList/
  │   └── SearchBar/
  ├── pages/
  │   └── Home/
  ├── services/
  │   └── api.js
  ├── styles/
  ├── App.js
  ├── App.css
  └── index.js
```

## Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para Execução
1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```
4. Acesse o aplicativo em seu navegador:
   ```
   http://localhost:3000
   ```

## API
O projeto utiliza a seguinte API para armazenar e gerenciar as habilidades:
- URL base: https://6738a9b34eb22e24fca89864.mockapi.io/api
- Endpoints:
  - GET /habilidades - Lista todas as habilidades
  - POST /habilidades - Adiciona uma nova habilidade
  - PUT /habilidades/:id - Atualiza uma habilidade existente
  - DELETE /habilidades/:id - Remove uma habilidade

## Implementação dos Requisitos
- ✅ Página Inicial com barra de pesquisa, lista de habilidades e botão para adicionar
- ✅ Utilização de múltiplos componentes React
- ✅ React Router para a rota inicial
- ✅ Axios para requisições HTTP
- ✅ Modal para adicionar nova habilidade
- ✅ Layout seguindo o design do Figma
- ✅ Implementação do filtro de busca
- ✅ Implementação de edição e deleção de habilidades
