import Capy6 from "../../../../assets/blog/capy-6.webp"
import Image from 'next/image';
import BlogLayout from "../BlogLayout";

export default function Article6() {
    return (
        <BlogLayout headerText=" Articulo Nro. 6" footerText="Footer Articulo Nro. 6">
        <div className=" h-full w-fullh-full bg-green-100 flex items-center justify-center gap-5 flex-grow ">
            <Image className=" w-full h-full object-cover " src={Capy6} alt="logo-capy" />
            <div className=" flex flex-col m-5 gap-2">
                <h1 className=" text-4xl font-serif ">Son animales muy pacíficos.</h1>
                <p className=" font-serif text-base">Son conocidos por su comportamiento tranquilo y tolerante, lo que les permite interactuar con muchas otras especies. Los carpinchos son famosos por su tolerancia. A menudo se los ve relajados mientras aves, monos o incluso otros animales se les acercan o interactúan con ellos. Esto los convierte en símbolos de tranquilidad.</p>
                <p className=" font-serif text-base">
                Los capibaras son conocidos por su comportamiento tranquilo y sociable, lo que los convierte en animales notablemente pacíficos en su interacción tanto con otros miembros de su especie como con animales de otras especies, incluidos los humanos. Pasan gran parte de su tiempo descansando, pastando o sumergidos en el agua, mostrando un carácter relajado que les permite mantenerse calmados incluso en presencia de posibles amenazas, siempre que no se sientan directamente acosados. Su temperamento apacible les ha ganado un lugar especial en la cultura popular y ha fomentado su integración en entornos urbanos y rurales, donde son aceptados como parte del paisaje natural. Esta calma natural también refleja su estrategia evolutiva: depender de la cohesión grupal y del entorno acuático para minimizar el estrés y maximizar sus posibilidades de supervivencia.
                </p>
            </div>
        </div>
        </BlogLayout>
    )

}