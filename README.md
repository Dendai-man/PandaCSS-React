# Panda CSS + React

This repository demonstrates the integration of Panda CSS with React. It serves as a reference for a presentation on Panda CSS + React design patterns.

## Features

- React with TypeScript
- Panda CSS for styling
- Vite for fast development and building

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dendai-man/PandaCSS-React.git
   cd PandaCSS-React
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:12000`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run prepare` - Generate Panda CSS files
- `npm run panda:dev` - Watch for changes and regenerate Panda CSS files

## Project Structure

```
PandaCSS-React/
├── public/              # Static assets
├── src/                 # Source code
│   ├── components/      # React components
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Entry point
├── styled-system/       # Generated Panda CSS files
├── panda.config.ts      # Panda CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## License

MIT