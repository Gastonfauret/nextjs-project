"use client";

import React, { useState } from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");

  return (
    <>
      <div className="flex flex-col items-center justify-evenly h-full text-xl bg-yellow-100">
        <h2>Rutas relativas a la cuenta del Usuario</h2>
        <h3>Explicando la diferencia entre Layouts y Templates</h3>
        {children}
        <input
        className=" w-72 h-8 rounded-md text-center"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </>
  );
}
