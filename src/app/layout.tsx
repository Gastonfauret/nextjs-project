import "../../src/app/global.css";
import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <title>App Next.js By Jonmircha</title>
      
      <body className="flex flex-col h-screen">
        
        <header className="grid items-center justify-center w-full h-32 bg-red-300 ">
          <h2 className="text-4xl text-center ">Header de la Pagina</h2>
          <nav>
            <Link className="mx-10 text-lg hover:text-white" href="/">Home  </Link>
            <Link className="mr-10 text-lg hover:text-white" href="/contacto">Contacto  </Link>
            <Link className="mr-10 text-lg hover:text-white" href="/blog">Blog  </Link>
            <Link className="mr-10 text-lg hover:text-white" href="/acerca">Acerca  </Link> 
            <Link className="mr-10 text-lg hover:text-white" href="/productos" >Productos  </Link>
            <Link className="mr-10 text-lg hover:text-white" href="/login" >Login  </Link>
            <Link className="mr-10 text-lg hover:text-white" href="/register" >Registro  </Link>
            <Link className="mr-10 text-lg hover:text-white" href="/password" >Recuperar Password  </Link>      
            <Link className="mr-10 text-lg hover:text-white" href="/dashboard" >Dashboard  </Link>                           
          </nav>
        </header>
        
        <main className="flex-grow bg-gray-100">{children}</main>

        <footer className="flex items-center justify-center w-full h-32 text-xl bg-pink-600">Footer de la Pagina</footer>
        
      </body>
    </html>
  );
}
