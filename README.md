# Clean Architecture

clean-arc-simple-nodejs

A simple example implementation of **Clean Architecture** in Node.js with TypeScript, Express, and Prisma.

## Overview

This project demonstrates the core principles of Clean Architecture: separation of concerns, dependency inversion, and testability. The business logic is independent of frameworks, databases, and external interfaces.

## Architecture Layers

```
┌─────────────────────────────────────────────────────────────┐
│                    Infrastructure (Infra)                     │
│  Controllers, Routes, Repositories, Database (Prisma)         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Application (Use Cases)                    │
│  Business rules orchestration, DTOs                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Domain (Entities)                       │
│  Entities, Repository interfaces (abstractions)               │
└─────────────────────────────────────────────────────────────┘
```

- **Domain**: Core business entities and repository interfaces. No external dependencies.
- **Application**: Use cases that orchestrate business logic. Depends only on domain abstractions.
- **Infrastructure**: Controllers, routes, and concrete implementations (e.g., Prisma repositories). Implements domain interfaces.

## Project Structure

```
src/
├── main/                    # Application entry point
│   ├── app.ts              # Express app setup
│   └── server.ts           # Server bootstrap
├── modules/
│   └── users/
│       ├── domain/         # Domain layer
│       │   ├── entities/
│       │   │   └── User.ts
│       │   └── repositories/
│       │       └── IUserRepository.ts
│       ├── application/    # Application layer
│       │   ├── use-cases/
│       │   │   └── CreateUserUseCase.ts
│       │   └── dtos/
│       │       └── CreateUserDTO.ts
│       └── infra/          # Infrastructure layer
│           ├── controllers/
│           ├── routes/
│           └── repositories/
├── infra/
│   └── database/
│       └── prisma/
│           └── client.ts
└── shared/
    └── errors/
        └── AppError.ts
```

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express
- **ORM**: Prisma (PostgreSQL)
- **Validation**: Zod

## Prerequisites

- Node.js (v18+)
- Docker & Docker Compose (for PostgreSQL and Redis)
- Yarn or npm

## Getting Started

### 1. Clone and install dependencies

```bash
yarn install
# or
npm install
```

### 2. Start the database

```bash
docker-compose up -d
```

### 3. Configure environment

Copy the example env file and set your database URL:

```bash
cp .env.example .env
```

Edit `.env` with your PostgreSQL connection string:

```
DATABASE_URL=postgres://postgres:a6d86202fec026e664a92019ff58cdbeb573f82737ad1601915aa51f047f@localhost:5432/clean_arch_db?schema=public
```

### 4. Run migrations

```bash
npx prisma migrate dev
```

### 5. Run the application

```bash
yarn dev
# or
npm run dev
```

The server will start at `http://localhost:3333`.

## API

### Create User

**POST** `/users`

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Response (201)**

```json
{
  "message": "User created successfully",
  "user": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## License

MIT © William Lodea Magnabosco
