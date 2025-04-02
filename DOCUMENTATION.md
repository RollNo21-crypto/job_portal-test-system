# Job Portal + Test System Documentation

## Project Overview
This project is a modern web application built with React and Vite, featuring a job portal integrated with a test system. The application utilizes modern frontend technologies and follows best practices for development.

## Tech Stack
- **React**: Frontend library (v19.0.0)
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: UI component library

## Installation Guide
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure
```
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   └── ui/
│   ├── lib/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── components.json
├── vite.config.js
└── package.json
```

## Dependencies

### Core Dependencies
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `react-router-dom`: ^6.26.0

### UI Components and Styling
- `@radix-ui/*`: Various UI primitives
- `class-variance-authority`: ^0.7.1
- `clsx`: ^2.1.1
- `tailwindcss`: ^4.0.17
- `tailwind-merge`: ^3.1.0
- `embla-carousel-react`: ^8.5.2
- `lucide-react`: ^0.486.0
- `vaul`: ^1.1.2

### Development Dependencies
- `@vitejs/plugin-react`: ^4.3.4
- `vite`: ^6.2.0
- `eslint` and related plugins
- TypeScript types for React

## Configuration

### Vite Configuration
The project uses Vite as the build tool with the following configuration:
- React plugin enabled
- Tailwind CSS integration
- Path alias '@' configured to point to the src directory

### Components Configuration (components.json)
- Style: new-york
- Base color: slate
- Icon library: lucide
- Path aliases configured for components, utils, and UI

### Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

## Development Guidelines
1. Follow the existing project structure
2. Use the provided UI components from shadcn/ui
3. Follow the established code style and conventions
4. Utilize the configured path aliases for imports

## Additional Resources
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)