export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex items-center justify-center w-full h-32 text-xl bg-pink-200">Cabecera del Blog</header>
      
      <main className="flex flex-col items-center justify-center w-full bg-gray-300">
        <section>{children}</section>
        <aside >
          <form className="flex flex-col" action="">
            <input type="search" name="" id="" placeholder="Buscar"/>
            <input className="cursor-pointer hover:text-blue-400" type="submit" value="Enviar"  />
          </form>
        </aside>
      </main>
      
      <footer className="flex items-center justify-center w-full h-32 text-xl bg-pink-300">Footer del Blog</footer>
    </>
  );
}
