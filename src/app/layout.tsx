import "../../src/app/global.css";
import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <title>App Next.js By Jonmircha</title>
      <body>
        <header className=" bg-red-300 w-full h-32 grid items-center justify-center ">
          <h2 className=" text-4xl text-center ">Header de la Pagina</h2>
          <nav>
            <Link className=" mx-10 text-lg " href="/">Home  </Link>
            <Link className=" mr-10 text-lg " href="/contacto">Contacto  </Link>
            <Link className=" mr-10 text-lg " href="/blog">Blog  </Link>
            <Link className=" mr-10 text-lg " href="/acerca">Acerca  </Link> 
            <Link className=" mr-10 text-lg " href="/productos" >Productos  </Link>
            <Link className=" mr-10 text-lg " href="/login" >Login  </Link>
            <Link className=" mr-10 text-lg " href="/register" >Registro  </Link>
            <Link className=" mr-10 text-lg " href="/password" >Recuperar Password  </Link>      
            <Link className=" mr-10 text-lg " href="/dashboard" >Dashboard  </Link>                           
          </nav>
        </header>
        <main>{children}</main>
        <footer>Footer de la Pagina</footer>
      </body>
    </html>
  );
}
