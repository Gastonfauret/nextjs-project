import Capy3 from "../../../../assets/blog/capy-3.webp"
import Image from 'next/image';

export default function Article3() {
    return (
        <div className=" h-40 w-40 bg-green-100 ">
            <Image className=" w-full h-full object-cover " src={Capy3} alt="logo-capy" />
            <h1>Viven en grupos sociales.</h1>
            <p>Suelen vivir en manadas de 10 a 20 individuos, aunque a veces forman grupos más grandes en temporada de lluvias. Son animales muy sociales que forman comunidades estables. En cada grupo suele haber un macho dominante, varias hembras y crías. La convivencia en grupo les ofrece protección contra depredadores y facilita la búsqueda de comida.</p>
        </div>
    )
    
}