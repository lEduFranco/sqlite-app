# Autor
- Nome: Luiz Sá
- RA: 72300788

# SQLite App

Este é um aplicativo desenvolvido com React Native e Expo, que permite gerenciar uma lista de produtos utilizando um banco de dados SQLite. O aplicativo oferece funcionalidades para criar, atualizar, listar e remover produtos.

## Funcionalidades

- **Adicionar Produtos:** Permite cadastrar novos produtos com nome e quantidade.
- **Atualizar Produtos:** Possibilita a edição de produtos já cadastrados.
- **Listar Produtos:** Exibe uma lista de produtos cadastrados, com opção de pesquisa.
- **Remover Produtos:** Permite a exclusão de produtos da lista.

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter os seguintes itens instalados:

- Node.js (versão 14 ou superior)
- Expo CLI (instale com `npm install -g expo-cli`)
- Android Studio ou Xcode (para emulação)

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone <URL-do-repositório>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run android
   ```
4. Execute o aplicativo:
   - Para Android, você pode usar um emulador ou um dispositivo físico conectado:
     ```bash
     npm run android
     ```
   - Para iOS, você pode usar um emulador ou um dispositivo físico conectado:
     ```bash
     npm run ios
     ```

## Estrutura do Projeto

- `src/app/index.tsx`: Componente principal do aplicativo.
- `src/database/useProductDatabase.ts`: Hook para interagir com o banco de dados SQLite.
- `src/components/Input.tsx`: Componente de entrada de texto reutilizável.
- `src/components/Product.tsx`: Componente para exibir informações de um produto.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b feature/nome-da-sua-feature
   ```
3. Faça suas alterações e commit:
   ```bash
   git commit -m 'Adicionando nova feature'
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin feature/nome-da-sua-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.