export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" flex flex-col w-full h-full ">
        <header className="flex items-center justify-center w-full h-40 text-xl bg-pink-200 mt-5">
          Cabecera del Blog
        </header>

        <main className=" w-full  h-full bg-green-300 ">
         {children}
        </main>

        <footer className="flex items-center justify-center w-full h-40 text-xl bg-pink-300">
          Footer del Blog
        </footer>
      </div>
    </>
  );
}
