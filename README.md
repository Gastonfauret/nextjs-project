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

------------------------------------------------------------------------------------------------------

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

------------------------------------------------------------------------------------------------------

Correr el proyecto:
npm run dev

------------------------------------------------------------------------------------------------------

Carpeta "_oculta":

Las carpetas con un prefijo de guion bajo no tienen un significado especial ni afectan el comportamiento del framework de manera automática. Sin embargo, los desarrolladores a veces las utilizan para organizar el proyecto, principalmente con dos propósitos:

- Agrupar utilidades o archivos internos: Las carpetas "_ocultas" suelen emplearse para almacenar archivos y módulos que no deberían exponerse en el árbol de archivos de rutas, como componentes reutilizables, funciones auxiliares, o hooks que solo son utilizados internamente en el proyecto.

- Evitar que Next.js las trate como rutas: Las carpetas en pages en Next.js generan rutas automáticamente. Al nombrarlas con un guion bajo (_), se evita que Next.js las interprete como rutas, ya que los nombres que comienzan con _ no son detectados como rutas públicas.

------------------------------------------------------------------------------------------------------

Carpeta "(cuenta)":

Las carpetas con nombres entre paréntesis (por ejemplo, (cuenta)) se usan principalmente para organización en la estructura de carpetas y rutas, sobre todo cuando se utiliza la funcionalidad de App Router introducida en Next.js 13. 

Los paréntesis permiten:

- Agrupar rutas sin afectar la URL: Las carpetas con nombres entre paréntesis no afectan la estructura de la URL generada. Esto es útil para crear una organización lógica en el código sin modificar la jerarquía de las rutas en la URL final. 
Por ejemplo, una carpeta llamada (cuenta) puede contener componentes y subrutas relacionadas con la cuenta del usuario, pero no agrega "/cuenta" a la URL.

- Anidación y reutilización de componentes: Estas carpetas ayudan a estructurar mejor componentes o layouts compartidos para diferentes secciones sin influir en la URL, ideal para agrupar elementos comunes en distintas páginas.

Usar carpetas entre paréntesis permite mantener una organización interna más clara en el código, manteniendo URLs simples y sin estos segmentos en la ruta visible.

------------------------------------------------------------------------------------------------------

Carpeta "@chat":

Las carpetas con un prefijo "@" (como @chat) se utilizan para organizar y estructurar el código de manera semántica, aunque no tienen un significado funcional propio en el framework. 

Este tipo de convención suele utilizarse en proyectos para mejorar la legibilidad y mantener un orden lógico en la estructura del código.

El "@" permite:

- Distinguir módulos o funcionalidades: Prefijos como @chat o @auth ayudan a identificar carpetas que agrupan componentes, funciones, o lógica específica de una funcionalidad (en este caso, de "chat"). Esto hace que sea más fácil encontrar y mantener el código relacionado a medida que el proyecto crece.

- Evitar conflictos de nombres: Este prefijo también ayuda a evitar conflictos en nombres de carpetas y módulos, ya que permite diferenciar de manera clara las carpetas funcionales de las rutas o componentes genéricos.

- Mejorar la organización en proyectos grandes: En proyectos complejos, las carpetas con prefijos @ facilitan un sistema de organización similar al de los monorepos, donde cada carpeta representa un dominio o sección del sistema, lo que mejora la escalabilidad y el orden.

Se recomienda usar esta convención en proyectos de gran escala o con múltiples funcionalidades para mantener la claridad en la estructura de archivos. 
Esto es especialmente útil en equipos, donde la convención puede ayudar a que los desarrolladores ubiquen rápidamente la funcionalidad relacionada con un módulo específico.

------------------------------------------------------------------------------------------------------

Carpeta "[productId]":

las carpetas con nombres entre corchetes representan rutas dinámicas. 
Este tipo de carpeta se usa para generar rutas que dependen de un parámetro variable, permitiendo que una sola página maneje múltiples URLs basadas en un identificador específico (como el ID de un producto).

Razones para usar carpetas con corchetes [param]:

- Manejo de contenido dinámico: Las carpetas con corchetes permiten construir páginas donde el contenido varía según un parámetro en la URL. Por ejemplo, una carpeta [productId] dentro de pages/products permite acceder a URLs como /products/1, /products/2, etc., donde el contenido cambia según el ID del producto especificado.

- Simplificar la gestión de rutas: En lugar de crear una página para cada ID posible, Next.js usa rutas dinámicas para renderizar automáticamente la misma página con distintos datos en función del parámetro. Esto simplifica la estructura de archivos y hace el código más mantenible.

Las rutas dinámicas son ideales cuando necesitas generar páginas únicas para un conjunto de datos, como productos, publicaciones, usuarios, o cualquier otro tipo de recurso identificado por un parámetro. Esto es muy común en aplicaciones que presentan contenido basado en bases de datos o APIs.

------------------------------------------------------------------------------------------------------

Archivo "not-found.tsx":

el archivo not-found.js se usa dentro del sistema de enrutamiento para manejar páginas de error 404 personalizadas en rutas de la aplicación cuando no se encuentra el contenido solicitado. 
Este archivo se utiliza junto con el App Router (introducido en Next.js 13), en lugar de las convenciones previas.

Razones para usar not-found.js:

- Control específico de errores 404 en rutas anidadas: Colocar un archivo not-found.js en una ruta específica permite que Next.js muestre una página de error personalizada cuando una subruta o contenido en esa sección no existe. Esto da un control más granular sobre cómo manejar los errores 404 en diferentes partes de la aplicación.

- Mejor experiencia de usuario: Proporciona a los usuarios un mensaje claro y opciones para volver a una página válida, mejorando la usabilidad y evitando pantallas de error genéricas.

- Compatibilidad con la función notFound(): En el App Router, la función notFound() se puede llamar dentro de componentes o rutas si algún contenido específico no se encuentra. Esta función redirige automáticamente a not-found.js, lo que facilita mostrar un error 404 sin necesidad de manejar la lógica de redireccionamiento.

El archivo not-found.js es útil cuando quieres una página de error 404 personalizada para una ruta en particular o cuando necesitas diferenciar entre errores 404 en distintas secciones del sitio. 
Esto permite una experiencia más cohesiva y controlada dentro de aplicaciones grandes o con secciones específicas que pueden no tener contenido siempre disponible.

------------------------------------------------------------------------------------------------------