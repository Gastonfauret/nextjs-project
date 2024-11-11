export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" flex flex-col bg-yellow-300 w-full h-full ">
        <header className="flex items-center justify-center w-full h-32 text-xl bg-pink-200">
          Cabecera del Blog
        </header>

        <main className="flex flex-col flex-grow items-center w-full bg-gray-300 justify-evenly">
          <section>{children}</section>

          <div className="flex items-center justify-center w-1/3 h-40 bg-gray-500 rounded-xl">
            <aside>
              <form className="flex flex-col items-center rounded-xl justify-center gap-3 w-80 h-24 bg-gray-300 " action="">
                <input className=" w-72 h-8 rounded-md text-center" type="search" name="" id="" placeholder="Buscar" />
                <input
                  className="cursor-pointer hover:text-blue-400"
                  type="submit"
                  value="Enviar"
                />
              </form>
            </aside>
          </div>
        </main>

        <footer className="flex items-center justify-center w-full h-32 text-xl bg-pink-300">
          Footer del Blog
        </footer>
      </div>
    </>
  );
}
