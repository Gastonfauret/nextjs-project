"use client";
//import { useRouter } from "next/navigation";
import CapyAtencionCliente from "../../../assets/capy-atencion-cliente.png"
import LogoWhatsapp from "../../../assets/logo-whatsapp.png"
import CapyCelular from "../../../assets/capy-celu.png"
import LogoEmail from "../../../assets/logo-email.png"
import CapyEmail from "../../../assets/capy-email.png"
import Image from 'next/image';


 export default function Contacto() {
//   const router = useRouter();

  // const handleClick = () => {
  //   router.push("/");
  // };

  return (
    <>
      <div className="flex flex-col items-center justify-around w-full h-full p-1">

        <div className=" h-full w-full gap-1 flex">

          <div className=" h-full w-full bg-green-200 flex items-center justify-center flex-col py-8 gap-1 rounded-lg">
            <div className="flex  items-center justify-center w-5/6 h-28 bg-green-100 rounded-lg">
              <p className=' text-green-500 font-serif font-semibold'>Contactate con un capibara</p>
              <Image className=" w-40 " src={CapyAtencionCliente} alt="Capy-atencion-al-cliente" />
            </div>
            <div className=" w-5/6 h-full rounded-lg bg-green-100 flex flex-col items-center justify-center gap-5 2xl:gap-10 lg:py-7">
              <input className=" w-4/5 h-8 flex text-center rounded-md border-green-400 border" type="text" placeholder="Nombres" />
              <input className=" w-4/5 h-8 flex text-center rounded-md border-green-400 border" type="text" placeholder="Apellido" />
              <input className=" w-4/5 h-8 flex text-center rounded-md border-green-400 border" type="email" placeholder="Correo electrónico" />
              <input className=" w-4/5 h-8 flex text-center rounded-md border-green-400 border" type="tel" placeholder="Número de teléfono" />
              <input className=" w-4/5 h-8 flex text-center rounded-md border-green-400 border" type="text" placeholder="Pais" />
              <textarea className=" w-4/5 flex text-center border-green-400 border rounded-md" placeholder="Escriba su mensaje aqui" id="msg" name="user_message"></textarea>
              <button className=" w-4/5 h-8 bg-green-400 rounded-md hover:bg-green-600 font-serif text-white font-semibold" type="submit">Enviar</button>
            </div>
          </div>

          <div className="flex flex-col h-full w-full gap-1">
            <div className=" h-full w-full bg-green-200 flex items-center justify-center rounded-lg">
              <div className="flex items-center justify-center w-5/6 h-56 bg-green-100 rounded-lg">
                <Image className=" w-16 " src={LogoWhatsapp} alt="Logo-Whatsapp" />
                <div className="h-16 w-62 flex flex-col items-center justify-center mx-5 gap-2">
                  <p className=" font-serif text-green-600 font-semibold">Enviale un mensaje a un capibara</p>
                  <a className=" font-serif text-green-600 font-semibold hover:text-white" href="https://wa.link/4hg05w" target="_blank" rel="noopener noreferrer">Enviar mensaje</a>
                </div>
                <Image className=" w-20 " src={CapyCelular} alt="Capy-Celular" />
              </div>
            </div>
            <div className=" h-full w-full bg-green-200 flex items-center justify-center rounded-lg">
              <div className="flex items-center justify-center w-5/6 h-56 bg-green-100 rounded-lg">
                <Image className=" w-12 " src={LogoEmail} alt="Logo-Whatsapp" />
                <div className="h-16 w-62 flex flex-col items-center justify-center mx-5 gap-2">
                  <p className=" font-serif text-green-600 font-semibold">Enviale un email a un capibara</p>
                  <a className=" font-serif text-green-600 font-semibold hover:text-white" href="mailto:gastonfauret@gmail.com" target="_blank" rel="noopener noreferrer">Enviar email</a>
                </div>
                <Image className=" w-24 " src={CapyEmail} alt="Capy-Celular" />
              </div>
            </div>
          </div>
        </div>        
      </div>
    </>
  );
}
