import "../../src/app/global.css";
import Link from "next/link"
import CapyLogo from "../../assets/capy-logo.png"
import CapyDev from "../../assets/capy-dev.png"
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <title>App Next.js By Jonmircha</title>

      <body className="flex flex-col h-screen">

        <header className="flex justify-between items-center w-full h-24 pt-5 ">
          <nav>
            <Link className="mx-10 text-green-600 text-xs font-semibold hover:text-black" href="/">Home  </Link>
            <Link className="mr-10 text-green-600 text-xs font-semibold hover:text-black" href="/contacto">Contacto  </Link>
            <Link className="mr-10 text-green-600 text-xs font-semibold hover:text-black" href="/blog">Blog  </Link>
            <Link className="mr-10 text-green-600 text-xs font-semibold hover:text-black" href="/acerca">Acerca  </Link>
            <Link className="mr-10 text-green-600 text-xs font-semibold hover:text-black" href="/productos" >Productos  </Link>
            <Link className="mr-10 text-green-600 text-xs font-semibold hover:text-black" href="/login" >Login  </Link>
            <Link className="mr-10 text-green-600 text-xs font-semibold hover:text-black" href="/register" >Registro  </Link>
            <Link className="mr-10 text-green-600 text-xs font-semibold hover:text-black" href="/password" >Recuperar Password  </Link>
            <Link className="mr-10 text-green-600 text-xs font-semibold hover:text-black" href="/dashboard" >Dashboard  </Link>
          </nav>

          <Image className=" w-40 mx-8" src={CapyLogo} alt="logo-capy" />

        </header>

        <main className="flex-grow ">{children}</main>

        <footer className="flex items-center justify-center w-full h-32 text-xl">
          <div className="flex h-full w-full bg-green-200">
            <div className=" h-full w-full ">
              <ul className=" flex flex-col items-start h-full justify-center pl-5 gap-1">
                <li className=" text-xs font-semibold font-serif text-green-400 hover:text-green-900 cursor-pointer">Home</li>
                <li className=" text-xs font-semibold font-serif text-green-400 hover:text-green-900 cursor-pointer">Contacto</li>
                <li className=" text-xs font-semibold font-serif text-green-400 hover:text-green-900 cursor-pointer">Blog</li>
                <li className=" text-xs font-semibold font-serif text-green-400 hover:text-green-900 cursor-pointer">Acerca</li>
                <li className=" text-xs font-semibold font-serif text-green-400 hover:text-green-900 cursor-pointer">Productos</li>
              </ul>
            </div>

            <div className=" h-full w-full ">
            <ul className=" flex flex-col items-start h-full justify-center pr-5 gap-2">
                <li className=" text-xs font-semibold font-serif text-green-400 hover:text-green-900 cursor-pointer">Login</li>
                <li className=" text-xs font-semibold font-serif text-green-400 hover:text-green-900 cursor-pointer">Registro</li>
                <li className=" text-xs font-semibold font-serif text-green-400 hover:text-green-900 cursor-pointer">Recuperar Password</li>
                <li className=" text-xs font-semibold font-serif text-green-400 hover:text-green-900 cursor-pointer">Dashboard</li>                
              </ul>
            </div>
          </div>
          <div className="flex flex-col text-center justify-center font-serif h-full w-full bg-green-200 gap-3">
            <p className=" text-sm text-green-400 font-semibold ">Todos los Capibaras usados en esta pagina fueron alimentados y acariciados correspondientemente.</p>
            <p className=" text-sm text-green-400 font-semibold ">Capyright @2024</p>
          </div>
          <div className=" h-full w-full bg-green-200 flex items-center justify-center gap-5">
            <a className=" text-sm text-green-400 font-semibold hover:text-green-900 font-serif" href="https://www.linkedin.com/in/gastonfauret/" target="_blank" rel="noopener noreferrer">Pagina realizada por este Capy</a>            
            <Image className=" w-24 " src={CapyDev} alt="capy-dev" />
          </div>
        </footer>

      </body>
    </html>
  );
}
