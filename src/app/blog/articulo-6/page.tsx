import Capy6 from "../../../../assets/blog/capy-6.webp"
import Image from 'next/image';

export default function Article6() {
    return (
        <div className=" h-40 w-40 bg-green-100 ">
            <Image className=" w-full h-full object-cover " src={Capy6} alt="logo-capy" />
            <h1>Son animales muy pacíficos.</h1>
            <p>Son conocidos por su comportamiento tranquilo y tolerante, lo que les permite interactuar con muchas otras especies. Los carpinchos son famosos por su tolerancia. A menudo se los ve relajados mientras aves, monos o incluso otros animales se les acercan o interactúan con ellos. Esto los convierte en símbolos de tranquilidad.</p>
        </div>
    )
    
}