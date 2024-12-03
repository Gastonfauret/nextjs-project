import Capy5 from "../../../../assets/blog/capy-5.webp"
import Image from 'next/image';
import BlogLayout from "../BlogLayout";

export default function Article5() {
    return (
        <BlogLayout headerText=" Articulo Nro. 5" footerText="Footer Articulo Nro. 5">
        <div className=" h-full w-fullh-full bg-green-100 flex items-center justify-center gap-5 flex-grow ">
            <Image className=" w-full h-full object-cover " src={Capy5} alt="logo-capy" />
            <div className=" flex flex-col m-5 gap-2 xl:gap-10">
                <h1 className=" text-4xl font-serif xl:text-4xl">Son parientes cercanos de los conejillos de Indias.</h1>
                <p className=" font-serif text-base xl:text-xl">Aunque mucho más grandes, están relacionados con estos pequeños roedores. Ambos pertenecen al orden Rodentia. Aunque las diferencias de tamaño son notables, comparten características genéticas y anatómicas, como sus incisivos en crecimiento continuo.</p>
                <p className=" font-serif text-base xl:text-xl">
                Los capibaras son el roedor más grande del mundo, perteneciendo a la familia Caviidae y al género Hydrochoerus. Aunque están más relacionados con los conejillos de Indias y las pacas que con las ratas o ratones, comparten características típicas de los roedores, como sus incisivos en continuo crecimiento que utilizan para masticar materiales fibrosos y desgastar el esmalte dental. Su tamaño y peso, que pueden alcanzar hasta 70 kg, los diferencian significativamente de otros roedores. A pesar de su imponente apariencia, su fisiología y comportamiento siguen los patrones de los roedores, como su alta capacidad reproductiva y adaptabilidad a distintos entornos, lo que los ha convertido en una especie exitosa en ecosistemas de América del Sur.
                </p>
            </div>
        </div>
        </BlogLayout>
    )

}