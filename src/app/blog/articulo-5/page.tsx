import Capy5 from "../../../../assets/blog/capy-5.webp"
import Image from 'next/image';

export default function Article5() {
    return (
        <div className=" h-40 w-40 bg-green-100 ">
            <Image className=" w-full h-full object-cover " src={Capy5} alt="logo-capy" />
            <h1>Son parientes cercanos de los conejillos de Indias.</h1>
            <p>Aunque mucho más grandes, están relacionados con estos pequeños roedores. Ambos pertenecen al orden Rodentia. Aunque las diferencias de tamaño son notables, comparten características genéticas y anatómicas, como sus incisivos en crecimiento continuo.</p>
        </div>
    )
    
}