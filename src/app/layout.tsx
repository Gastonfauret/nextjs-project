import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          {/* Aquí puedes agregar un header global si lo deseas */}
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
