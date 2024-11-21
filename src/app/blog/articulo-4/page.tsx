import Capy4 from "../../../../assets/blog/capy-4.webp"
import Image from 'next/image';

export default function Article4() {
    return (
        <div className=" h-40 w-40 bg-green-100 ">
            <Image className=" w-full h-full object-cover " src={Capy4} alt="logo-capy" />
            <h1>Tienen un sistema digestivo especial.</h1>
            <p>Como herbívoros, comen principalmente hierba, pero también realizan coprofagia (comen su propio excremento) para extraer más nutrientes. Su dieta rica en fibra sería difícil de digerir sin un sistema adaptado. Su ciego, una cámara digestiva especial, fermenta la celulosa de las plantas. Además, la coprofagia les permite reabsorber nutrientes esenciales.</p>
        </div>
    )
    
}