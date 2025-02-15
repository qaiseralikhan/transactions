# Backend Project

## Overview

This project is a backend service for managing transactions. It provides APIs for creating, updating, deleting, and retrieving transaction records.

## Prerequisites

- Node.js (v20+)
- pnpm (Install using npm `npm install -g pnpm@latest-10`)
- Supabase account

## Setup Instructions

To run the app locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/qaiseralikhan/transactions.git
cd backend
```

2. **Install dependencies:**

```bash
pnpm install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=5000
SUPABASE_URL=
SUPABASE_KEY=
```

4. **Start the development server:**

```bash
pnpm run dev
```

4. **Open the api-docs in your browser:**
   Navigate to `http://localhost:5000/api-docs` in your web browser.

## API Endpoints

- `GET /transactions` - List all transactions
- `GET /transactions/:id` - Retrieve a specific transaction
- `POST /transactions` - Create a new transaction

## Folder Structure

```
backend/
│── src/
│   ├── config/          # Configuration files (Swagger, Logger, Supabase setup)
│   ├── controllers/     # Express route handlers (business logic)
│   ├── middleware/      # Custom middleware (error handling)
│   ├── routes/          # API route definitions
│   ├── services/        # Business logic (interaction with Supabase)
│   ├── validation/      # Request validation using Zod
│   ├── app.ts           # Express app configuration
│   ├── server.ts        # Server entry point
│── .env                 # Environment variables
│── README.md            # Project documentation
│── package.json         # Dependencies and scripts
│── tsconfig.json        # TypeScript configuration
```

## Libraries Used

- **Framework:** Express
- **Logging:** Pino, Express-Pino
- **Database layer:** supabase-client
- **Validation:** Zod
- **API docs:** swagger-jsdoc
- **Package Manager:** pnpm
- **Version Control:** Git

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact [qaiseralikhan903@gmail.com](mailto:qaiseralikhan903@gmail.com).
