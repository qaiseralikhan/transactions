# Project Documentation

## Overview

This project is a frontend for managing transactions. Right now its showing only transactions with refresh button.

## Prerequisites

- Node.js (v20+)
- pnpm (Install using npm `npm install -g pnpm@latest-10`)
- Backend APIs should be running

## Setup Instructions

To run the app locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/qaiseralikhan/transactions.git
cd frontend
```

2. **Install dependencies:**

```bash
pnpm install
```

3. **Start the development server:**

```bash
pnpm run dev
```

4. **Open the app in your browser:**
   Navigate to `http://localhost:5173` in your web browser.

## Project Structure

The project is organized as follows:

```
/frontend
├── src
│   ├── components
│   │   └── ui               #Contains reusable UI components
│   │   └── features         #Contains reusable feature based components
│   ├── helpers              #Contains all helpers utilities
│   │   └── ...
│   ├── pages                #Contains page components that represent different routes.
│   │   └── transactions
│   │   └── ..
│   ├── services
│   │   └── hooks            #Contains all custom hooks to communicate with services.
│   │   └── queries          #Contains all axios queries for fetching and posting data.
│   │   └── types            #Contains all types related to services
│   ├── store                #Contains all state management related things.
│   │   └── providers        #Contains all providers related to overall application.
│   ├── App.tsx              #The root component that sets up the app structure.
```

This structure helps in maintaining a clear separation of concerns, making the codebase more modular and easier to manage.

## Libraries Used

- **Framework:** React
- **Styling:** Tailwindcss
- **Build Tool:** vite
- **Package Manager:** pnpm
- **Third-Party Libraries:**
  - Axios (for HTTP requests)
  - react-query (fetching, caching, synchronizing and updating server state)
- **Version Control:** Git

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact [qaiseralikhan903@gmail.com](mailto:qaiseralikhan903@gmail.com).
