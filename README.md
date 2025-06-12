# 🚀 Desafio Técnico - Desenvolvedor Pleno (React + TypeScript)

## 🧠 Objetivo

Construir uma aplicação frontend utilizando **React + TypeScript**, aplicando os princípios do **SOLID**, o padrão de **Atomic Design** e boas práticas de desenvolvimento frontend. O projeto deverá consumir dados de uma API REST fictícia (mock) e apresentar uma experiência limpa e responsiva.

---

## 📦 Descrição do Projeto

Você deve desenvolver uma **Dashboard de Gestão de Usuários** com as seguintes funcionalidades:

1. **Listagem de usuários** (nome, e-mail, status).
2. **Filtro por status** (ativo/inativo).
3. **Formulário de criação de novo usuário**.
4. **Edição de usuário existente**.
5. **Remoção de usuário com confirmação**.

A interface deve consumir dados de uma API REST simulada via `json-server`, `msw`, ou qualquer solução de mock que simule chamadas HTTP.

---

## 🧰 Requisitos Técnicos

- **React 18+ com TypeScript**
- **Atomic Design**: estrutura de componentes clara (atoms, molecules, organisms, templates, pages).
- **Princípios SOLID** aplicados à arquitetura e organização do projeto.
- Utilização de **React Router**, **React Query**, **Zod** ou **Yup**, **Axios** (ou Fetch API).
- Estilização com **CSS Modules**, **Styled Components** ou **TailwindCSS** ou outra qualquer.
- Responsividade e UX amigável.
- Testes unitários com **Jest** + **React Testing Library** (mínimo: componentes e lógica de integração com API).
- Validação de formulário com feedback para o usuário.

---

## 🔗 API Fictícia (Mock)

Estrutura de usuário esperada:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}
```

Rotas:

- `GET /users`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`

---

## 🧪 Avaliação

Serão avaliados:

- Organização e clareza do código
- Uso correto do TypeScript
- Aplicação dos princípios **SOLID**
- Clareza na separação por camadas (componentes, serviços, modelos)
- Arquitetura baseada em **Atomic Design**
- Padronização e legibilidade do código
- Responsividade e UX
- Boas práticas de integração com APIs
- Cobertura e qualidade dos testes

---

## 📁 Entrega

- Repositório no GitHub com instruções claras de instalação e execução (`README.md`).
- Utilização de `git` com commits descritivos.
- Bonus: deploy no Vercel/Netlify.

---

Boa sorte! 💪
