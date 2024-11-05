# Todo List Application

An interactive Todo List app built with React, TypeScript, and Tailwind CSS. Users can add, edit, mark as done, and delete todos with a responsive, intuitive interface.

## Features

- **Add Todo**: Create tasks
- **Edit Todo**: Modify task text
- **Mark as Done**: Toggle task completion
- **Delete Todo**: Remove tasks permanently
- **Responsive Layout**: Optimized for all screen sizes

## Tech Stack

- **React**: UI components and state management
- **TypeScript**: Type safety
- **Vite**: Fast development with hot module replacement (HMR)
- **Tailwind CSS**: Responsive styling
- **React Hooks**: `useState`, `useRef`, `useEffect` for UI logic

## Setup

### Prerequisites

Ensure you have Node.js and npm or yarn installed.

### Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
npm install
# or
yarn install
```

### Run the App

Start the app in development mode:

```bash
npm start
# or
yarn start
```

Visit `http://localhost:3000` in your browser.

## Using React + TypeScript + Vite

This project is set up with Vite for a minimal, fast React development environment using TypeScript. Vite provides Hot Module Replacement (HMR) to improve the development experience. This setup also includes basic ESLint rules.

### Expanding ESLint Configuration

For production-level applications, update the ESLint configuration to enable type-aware lint rules:

1. Configure `parserOptions`:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`. Optionally, add `...tseslint.configs.stylisticTypeChecked`.

3. Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  settings: { react: { version: "18.3" } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Project Structure

```src
│
├── components
│ ├── TodoList.tsx # Renders list of todos
│ ├── TodoItem.tsx # Manages individual todo item
│
├── models
│ └── Todo.ts # TypeScript interface for Todo item
│
└── App.tsx # Main App component
```

## Usage

1. **Add**: Type a task and press Enter
2. **Edit**: Click the edit icon, modify, and press Enter
3. **Toggle Completion**: Click the check icon
4. **Delete**: Click the delete icon

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, reach out at [nickkang257@gmail.com](mailto:nickkang257@gmail.com).
