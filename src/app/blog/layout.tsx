export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>Cabecera del Blog</header>
      <main>
        <section>{children}</section>
        <aside>
          <form action="">
            <input type="search" name="" id="" placeholder="Buscar"/>
            <input type="submit" value="Enviar"  />
          </form>
        </aside>
      </main>
      <footer>Footer del Blog</footer>
    </>
  );
}
