import Image from 'next/image';
import CapyFamily from "../../assets/capy-family.jpg"
import CapyMate from "../../assets/capy-mate.png"
import CapyClub from "../../assets/capy-club.png"
import CapyFriend from "../../assets/capy-friend.png"
import CapyEating from "../../assets/capy-comiendo.png"

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-full text-xl">
      <div className="flex gap-1 flex-row items-center justify-center w-full h-72  my-2">
        <div className="flex flex-col items-center justify-evenly w-full h-full bg-green-200 ">
          <h1 className=" text-5xl font-serif text-green-900">Capibara Style</h1>
          <p className=" text-wrap text-xs font-semibold w-5/6 font-serif text-green-800 text-justify font leading-6">Los capibaras, también conocidos como carpinchos, son las criaturas más relajadas del reino animal. Son los roedores más grandes del mundo, y se les puede ver en grupos disfrutando de la vida a orillas de ríos y lagunas. Con sus enormes y adorables cuerpos peludos y patas cortas, los capibaras son la definición misma de la paz.</p>
        </div>
        <div className=" w-full h-full bg-white ">
          <Image className=" w-full h-full object-cover " src={CapyFamily} alt="logo-capy" />
        </div>
      </div>

      <div className="flex  w-full h-72 my-2 gap-1">
        <div className=' h-full w-full bg-green-200 rounded-xl flex flex-col items-center justify-evenly'>
          <Image className=" w-32 " src={CapyClub} alt="logo-capy" />
          <p className=' text-green-500 font-serif'>Unite al Club Capibara</p>
        </div>
        <div className=' h-full w-full bg-green-200 rounded-xl flex flex-col items-center justify-evenly'>
          <Image className=" w-36 " src={CapyEating} alt="logo-capy" />
          <p className=' text-green-500 font-serif'>Come como un Capibara</p>
        </div>
        <div className=' h-full w-full bg-green-200 rounded-xl flex flex-col items-center justify-evenly'>
          <Image className=" w-24 " src={CapyFriend} alt="logo-capy" />
          <p className=' text-green-500 font-serif'>Se social como un Capibara</p>
        </div>
        <div className=' h-full w-full bg-green-200 rounded-xl flex flex-col items-center justify-evenly'>
          <Image className=" w-36 " src={CapyMate} alt="logo-capy" />
          <p className=' text-green-500 font-serif'>Toma mate como un Capibara</p>
        </div>
      </div>
    </div>
  );
}

