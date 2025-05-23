# Panda CSS + React Design System

This repository demonstrates the integration of Panda CSS with React, implementing a comprehensive design system. It serves as a reference for a presentation on Panda CSS + React design patterns.

## Features

- React with TypeScript
- Panda CSS for styling
- Vite for fast development and building
- Custom theme tokens for colors, typography, and spacing
- Typography recipe with Japanese and English font variants
- Flex layout recipe for easy layout composition
- React components that utilize the design system

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
│   ├── styles/          # Theme and style configuration
│   │   ├── theme.ts           # Theme token values
│   │   ├── themeConstants.ts  # Theme constant definitions
│   │   └── libs/              # Style abstractions
│   │       └── recipes/       # Recipe abstractions
│   │           ├── cTypography/  # Typography recipe abstraction
│   │           │   ├── index.ts           # Exports the typography recipe
│   │           │   └── cTypography.stories.tsx  # Storybook examples
│   │           └── cFlex/        # Flex recipe abstraction
│   │               ├── index.ts           # Exports the flex recipe
│   │               └── cFlex.stories.tsx  # Storybook examples
│   ├── packages/        # Panda CSS configuration
│   │   └── panda/
│   │       ├── tokens.ts      # Token configuration for PandaCSS
│   │       ├── utilities.ts   # Utility styles configuration
│   │       ├── conditions.ts  # Conditional styles configuration
│   │       └── recipes/
│   │           ├── typographyRecipe.ts  # Typography recipe
│   │           └── flexRecipe.ts        # Flex layout recipe
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Entry point
├── styled-system/       # Generated Panda CSS files
├── panda.config.ts      # Panda CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Typography Recipe

The typography recipe provides a consistent way to apply typography styles across the application. It includes:

- Japanese font variants (Noto Sans JP)
- English font variants (Montserrat)
- Different font sizes, weights, and line heights
- Color variants

Example usage (direct HTML elements with className):

```tsx
<h1 className={cTypography({ name: "JP1L_48_Bold", color: "black" })}>
  Large Bold Text
</h1>

<p className={cTypography({ name: "JP1L_32_Bold", color: "vividPink" })}>
  Medium Bold Text with Color
</p>
```

## Flex Recipe

The flex recipe provides a simple way to create flexible layouts. It includes:

- Direction variants (row, column, rowReverse, columnReverse)
- Alignment variants (start, center, end, stretch, baseline)
- Justification variants (start, center, end, between, around, evenly)
- Wrap variants (noWrap, wrap, wrapReverse)
- Gap variants (0, 1, 2, 4, 6, 8, 12, 16)

Example usage (direct HTML elements with className):

```tsx
<div className={cFlex({ direction: "row", justify: "between", align: "center", gap: 4 })}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Design System Architecture

This project uses a loosely coupled approach to the design system:

1. **Recipe Definitions**: The core recipes are defined in the Panda CSS configuration
2. **Abstraction Layer**: An abstraction layer (`src/styles/libs/recipes`) provides a clean API for consuming the recipes
3. **Direct HTML Usage**: Instead of using composition components, we apply styles directly to HTML elements via className

This approach has several benefits:
- Keeps the DOM structure clean and semantic (using native HTML elements)
- Reduces the number of wrapper components
- Makes it easier to customize styles for specific use cases
- Creates a clear separation between the styling system and the application code

## License

MIT