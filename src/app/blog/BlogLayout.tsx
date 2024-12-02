export default function BlogLayout({
  children,
  headerText,
  footerText
}: {
  children: React.ReactNode;
  headerText: string;
  footerText: string

}) {
  return (
    <>
      <div className=" flex flex-col w-full h-full ">
        <header className="flex items-center justify-center w-full h-40 text-xl bg-green-300 mt-5">
          {headerText}
        </header>

        <main className=" w-full  h-full bg-green-300 ">
         {children}
        </main>

        <footer className="flex items-center justify-center w-full h-40 text-xl bg-green-300">
          {footerText}
        </footer>
      </div>
    </>
  );
}
