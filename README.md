# Project Title: Authentication and User Management API

## Table of Contents

- [Project Title: Authentication and User Management API](#project-title-authentication-and-user-management-api)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Setup](#environment-setup)
  - [API Endpoints](#api-endpoints)
    - [**Authentication**](#authentication)
  - [Folder Structure](#folder-structure)
  - [Usage](#usage)
  - [Contributing](#contributing)

---

## Project Overview

This is a NestJS-based REST API for authentication and user management, which includes features like user registration, login, JWT-based authentication, and secure data handling with MongoDB. The purpose of this project is to demonstrate secure, efficient handling of user data and authentication using best practices in a Node.js framework.

## Features

- **User Registration**: Securely register new users with hashed passwords.
- **User Login**: Authenticate users and generate JSON Web Tokens (JWT) for secure access.
- **JWT Authentication**: Protect endpoints and authorize user access using JWT.
- **Error Handling**: Standardized error handling for easy debugging and usage.
- **Environment Configuration**: Configure environment variables for different environments
- **Custom Middleware**: Implements middleware for logging requests, handling authentication, and validating JWTs to enhance security and traceability across all endpoints. (development, production).

## Technologies Used

- **Framework**: [NestJS](https://nestjs.com/) - Node.js framework for building efficient, scalable server-side applications.
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) for object modeling.
- **Authentication**: JSON Web Token (JWT) for secure user authentication.
- **Validation**: `class-validator` for DTO validation.

## Getting Started

### Prerequisites

- **Node.js**: Install Node.js (v14 or higher) from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Ensure MongoDB is installed and running on `localhost:27017` or provide a remote URI.
- **Nest CLI**: Install globally using `npm install -g @nestjs/cli`.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourprojectname.git
   cd yourprojectname
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Setup

1. Create a `.env` file in the root directory.
2. Add the following environment variables:

   ```plaintext
   DATABASE_URL=mongodb://localhost:27017/mydatabase
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

3. Start the MongoDB server (if running locally):

   ```bash
   mongod
   ```

4. Start the NestJS application:
   ```bash
   npm run start:dev
   ```

## API Endpoints

Below are the key endpoints available in this API:

### **Authentication**

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| POST   | `/auth/register` | Register a new user           |
| POST   | `/auth/login`    | Authenticate user and get JWT |

## Folder Structure

```plaintext
src
├── auth
│   ├── auth.module.ts        # Auth module definition
│   ├── auth.service.ts       # Auth business logic
│   ├── auth.controller.ts    # Auth API routes
│   └── dto                   # DTOs for request validation
├── users
│   ├── users.module.ts       # Users module definition
│   ├── users.service.ts      # User business logic
│   ├── users.controller.ts   # User API routes
│   └── schemas               # User Mongoose schema
├── main.ts                   # Entry point of the application
└── app.module.ts             # Root module definition
```

## Usage

1. **Register User**: Send a POST request to `/auth/register` with user details.
2. **Login User**: Send a POST request to `/auth/login` with user credentials to receive a JWT.
3. **Access Protected Route**: Include the JWT in the `Authorization` header as a Bearer token to access protected routes like `/users/profile`.

Example request headers for accessing protected routes:

```plaintext
Authorization: Bearer <token>
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.
