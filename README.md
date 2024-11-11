Creacion de Proyecto de Nextjs:

npx create-next-app@latest

Al crear el proyecto nos preguntara si queres instalar lo siguiente:

What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack for `next dev`?  No / Yes
Would you like to customize the import alias (`@/*` by default)? No / Yes
What import alias would you like configured? @/*

---------------------------------------------------------------------------

Instalacion de Tailwind:

En la carpeta de proyecto:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

En el archivo tailwind.config.js, copiar y pegar lo siguiente:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


En el archivo golbal.css, copiar y pegar lo siguiente:

@tailwind base;
@tailwind components;
@tailwind utilities;

---------------------------------------------------------------------------

Correr el proyecto:
npm run dev

---------------------------------------------------------------------------

