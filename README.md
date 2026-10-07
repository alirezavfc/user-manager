# User Manager

A small single-page user management application built with React and TypeScript.

The project focuses on practicing a realistic frontend workflow around **forms, validation, API communication, server-state management, and asynchronous UI states** using commonly used React libraries.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Hook Form
- Zod
- Axios
- TanStack Query
- Vitest
- React Testing Library
- JSONPlaceholder

## Features

- Fetch and display users
- Add a new user
- Form validation with Zod
- Loading and error states
- Success feedback after creating a user
- Server-state management with TanStack Query
- API communication with Axios
- Component and API-related testing

## API

The project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock REST API.

Currently used endpoints:

```text
GET  /users
POST /users
```

JSONPlaceholder simulates write operations but does not permanently persist changes. The API is used here to practice frontend API communication and server-state management.

## Project Structure

```text
src/
├── components/
│   ├── UserForm.tsx
│   └── UserList.tsx
├── services/
│   ├── api.ts
│   └── userApi.ts
├── types/
│   └── user.ts
├── App.tsx
└── main.tsx
```

The project intentionally keeps the architecture small and avoids unnecessary abstractions.

## Getting Started

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run tests:

```bash
npm run test
```

## Purpose

This project is part of my frontend development practice, with an emphasis on using common tools and patterns found in modern React applications.

It focuses on understanding how forms, validation, API requests, mutations, caching, and server-state management work together in a frontend application rather than implementing these concerns from scratch.
