# Job Portal + Test System Documentation

## Project Overview
This project is a modern web application built with React and Vite, featuring a job portal integrated with a test system. The application utilizes modern frontend technologies and follows best practices for development.

## Tech Stack
- **React**: Frontend library (v19.0.0)
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: UI component library
- **Clerk**: Authentication and user management
- **Supabase**: Backend and database services

## Installation Guide

### Basic Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Tailwind CSS Setup
1. Install Tailwind CSS and its peer dependencies:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```
2. Generate Tailwind configuration files:
   ```bash
   npx tailwindcss init -p
   ```
3. Configure your template paths in `tailwind.config.js`:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```
4. Add Tailwind directives to your `./src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### shadcn/ui Setup
1. Install shadcn/ui CLI:
   ```bash
   npm install -D @shadcn/ui
   ```
2. Initialize shadcn/ui:
   ```bash
   npx shadcn-ui init
   ```
3. Follow the CLI prompts:
   - Style: Select 'New York'
   - Base color: Choose 'slate'
   - CSS variables: Yes
   - React Server Components: No
   - Directory structure: Yes
4. Install components as needed:
   ```bash
   npx shadcn-ui add button
   npx shadcn-ui add card
   # Add other components as needed
   ```

### Clerk Authentication Setup
1. Install Clerk SDK:
   ```bash
   npm install @clerk/clerk-react
   ```
2. Create a Clerk account at https://clerk.com and create a new application
3. Create `.env` file in the root directory and add your Clerk keys:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key
   ```
4. Wrap your application with ClerkProvider in `src/main.jsx`:
   ```jsx
   import { ClerkProvider } from '@clerk/clerk-react'
   
   const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
   
   ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
       <ClerkProvider publishableKey={publishableKey}>
         <App />
       </ClerkProvider>
     </React.StrictMode>
   )
   ```

### Start Development Server
1. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure
```
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   └── react.svg
│   ├── components/
│   │   ├── header.jsx
│   │   └── ui/
│   ├── layout/
│   │   └── app-layout.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── pages/
│   │   ├── job-listing.jsx
│   │   ├── job.jsx
│   │   ├── landing.jsx
│   │   ├── my-job.jsx
│   │   ├── onboarding.jsx
│   │   ├── post-job.jsx
│   │   └── saved-jobs.jsx
│   ├── utils/
│   │   └── supabase.js
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
- `@clerk/clerk-react`: Latest version for authentication
- `@supabase/supabase-js`: Latest version for database operations

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

## Authentication
- The application uses Clerk for authentication and user management
- Dark theme is configured by default using Clerk's theme system
- Authentication state is managed through ClerkProvider in main.jsx
- Protected routes should be wrapped with authentication checks

## Environment Variables
- `VITE_CLERK_PUBLISHABLE_KEY`: Required for Clerk authentication
- Additional environment variables should be added to .env file

## Additional Resources
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)