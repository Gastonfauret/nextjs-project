import "../../src/app/global.css";
import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <title>App Next.js By Jonmircha</title>
      <body>
        <header>
          <h2>Header de la Pagina</h2>
          <nav>
            <Link href="/">Home--</Link>
            <Link href="/contacto">Contacto--</Link>
            <Link href="/blog">Blog--</Link>
            <Link href="/acerca">Acerca--</Link> 
            <Link href="/productos" >Productos</Link>           
          </nav>
        </header>
        <main>{children}</main>
        <footer>Footer de la Pagina</footer>
      </body>
    </html>
  );
}
