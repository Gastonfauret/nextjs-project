"use client";
import { useRouter } from "next/navigation";

export default function Contacto() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center w-full h-full bg-green-200">
      <h1 className="text-xl">Contacto</h1>
      <p className="cursor-pointer hover:text-blue-700" onClick={handleClick}>Volver</p>
    </div>
    </>
  );
}
