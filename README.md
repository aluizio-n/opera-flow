 🌐 Opera Flow: Plataforma de gestão de ordens de serviços industriais

O **Opera Flow** é uma plataforma robusta e moderna projetada para otimizar a **gestão de fluxos de trabalho** e a **automação de processos** em ambientes empresariais. Seu objetivo é fornecer uma interface intuitiva e ferramentas poderosas para que os usuários possam definir, monitorar e executar processos de negócios de forma eficiente.

Este repositório contém o código-fonte do **Frontend** da aplicação, responsável pela interface de usuário e pela interação com a API de backend.

## ✨ Funcionalidades Chave (Frontend)

O frontend do Opera Flow oferece a base para as seguintes interações:

*   **Autenticação de Usuário:** Páginas de Login e Registro, com validação de formulários e proteção de rotas (`auth-guard.ts`, `public-guard.ts`).
*   **Interface de Gestão:** Componentes para visualização e interação com os fluxos de trabalho (baseados no componente `home.ts`).
*   **Arquitetura Modular:** Código organizado em módulos de `core`, `pages` e `shared` para facilitar a manutenção e o desenvolvimento de novas funcionalidades.

## 🛠️ Tecnologias Utilizadas

O frontend do Opera Flow é construído sobre uma pilha de tecnologias modernas:

| Categoria | Tecnologia | Versão Principal | Papel no Projeto |
| :--- | :--- | :--- | :--- |
| **Framework** | Angular | 21.x | Construção da Single Page Application (SPA) e manipulação do DOM. |
| **Linguagem** | TypeScript | 5.x | Garante código escalável e menos propenso a erros com tipagem estática. |
| **Estilização** | Tailwind CSS | 4.x | Framework CSS utilitário para design rápido, responsivo e customizável. |
| **Testes** | Vitest | 4.x | Runner de testes unitários para garantir a qualidade e a lógica de negócio. |

## 📂 Estrutura do Repositório

O repositório é organizado para separar o código do frontend do restante do projeto (que presumivelmente incluiria um backend em outro diretório ou repositório).

```
opera-flow-main/
├── README.md             <-- Este arquivo
└── frontend/             <-- Diretório principal do Frontend (Angular)
    ├── src/              <-- Código-fonte da aplicação
    │   ├── app/          <-- Componentes, serviços e lógica de negócio
    │   └── ...
    ├── package.json      <-- Dependências e scripts
    └── tailwind.config.js<-- Configuração de Estilo
```

## 🚀 Primeiros Passos

Para configurar e executar o projeto em sua máquina local, você precisará ter o **Node.js** e o **npm** instalados.

1.  **Navegue para o diretório do Frontend:**
    ```bash
    cd frontend
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run start
    # ou ng serve
    ```
    A aplicação será iniciada em `http://localhost:4200/`.

## 👥 Desenvolvedores

Este projeto está sendo ativamente desenvolvido pelos seguintes colaboradores:

- Aluizio Neto
- Lucas Lopes
- Kariton Gomes
- Marlos
- Alex de Souza
- André Filipe
- Paulo Rezende


