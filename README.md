# User Manager

A small single-page user management application built with React and TypeScript.

The project focuses on practicing a realistic frontend workflow around **forms, API communication, server-state management, validation, CRUD operations, and testing** using commonly used React libraries.

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* React Hook Form
* Zod
* Axios
* TanStack Query
* Vitest
* React Testing Library
* JSONPlaceholder

## Features

* Fetch and display users
* Add a new user
* Edit an existing user
* Delete a user
* Form validation
* Loading and error states
* Empty state
* Server-state management with TanStack Query
* API communication with Axios
* Component and CRUD behavior testing

## API

The project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock REST API.

Available endpoints:

```text
GET    /users
POST   /users
PATCH  /users/:id
DELETE /users/:id
```

> JSONPlaceholder simulates write operations but does not permanently persist changes. This project uses it only for frontend API practice.

## Project Structure

```text
src/
├── components/
├── hooks/
├── services/
├── schemas/
├── types/
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

This project is part of my frontend development practice, with an emphasis on using common tools and patterns found in modern React applications rather than implementing API, form, and server-state management from scratch.
