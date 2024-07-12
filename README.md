# Planner

Welcome to the Planner Trip project! This project is designed to help you manage your tasks and schedule efficiently.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd Planner-NLW-JOURNEY-master
    ```

2. **Install dependencies:**

    Make sure you have Node.js installed. Then, run:

    ```bash
    npm install
    ```

3. **Set up the database:**

    The project uses Prisma for database management. To set up the database, run:

    ```bash
    npx prisma migrate dev
    ```

## Usage

To start the application, run:

```bash
npm run dev

This will start the development server. You can access the application at http://localhost:3000.

```
## Structure

The project structure is as follows:

```bash

Planner-NLW-JOURNEY-master
├── prisma                # Database schema and migrations
├── src                   # Source code of the application
│   ├── controllers       # Controllers for handling requests
│   ├── models            # Models for data representation
│   ├── routes            # API routes
│   ├── services          # Business logic and services
│   ├── utils             # Utility functions
│   └── app.ts            # Main application file
├── .gitignore            # Files and directories to be ignored by git
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Lock file for npm dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```
 ## Technologies Used
- Node.js: JavaScript runtime environment
- TypeScript: Typed superset of JavaScript
- Prisma: Database toolkit
- Express: Web framework for Node.js
