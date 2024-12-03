import Capy4 from "../../../../assets/blog/capy-4.webp"
import Image from 'next/image';
import BlogLayout from "../BlogLayout";

export default function Article4() {
    return (
        <BlogLayout headerText=" Articulo Nro. 4" footerText="Footer Articulo Nro. 4">
        <div className=" h-full w-fullh-full bg-green-100 flex items-center justify-center gap-5 flex-grow ">
            <Image className=" w-full h-full object-cover " src={Capy4} alt="logo-capy" />
            <div className=" flex flex-col m-5 gap-2 xl:gap-10">
                <h1 className=" text-4xl font-serif xl:text-4xl ">Tienen un sistema digestivo especial.</h1>
                <p className=" font-serif text-base xl:text-xl">Como herbívoros, comen principalmente hierba, pero también realizan coprofagia (comen su propio excremento) para extraer más nutrientes. Su dieta rica en fibra sería difícil de digerir sin un sistema adaptado. Su ciego, una cámara digestiva especial, fermenta la celulosa de las plantas. Además, la coprofagia les permite reabsorber nutrientes esenciales.</p>
                <p className=" font-serif text-base xl:text-xl">
                Los capibaras son herbívoros estrictos y tienen una dieta basada principalmente en plantas acuáticas, pastos y hierbas. Su sistema digestivo está adaptado para procesar grandes cantidades de fibra, lo que les permite aprovechar nutrientes de materiales vegetales duros. Además, son conocidos por practicar la cecotrofia, es decir, consumir sus propios excrementos blandos para maximizar la absorción de nutrientes y obtener bacterias beneficiosas para su flora intestinal. Esta estrategia es especialmente útil en ambientes donde los recursos alimenticios son limitados o de baja calidad. Su preferencia por áreas cercanas al agua no solo les proporciona acceso a plantas acuáticas, sino que también les permite hidratarse y mantener una dieta equilibrada. 
                </p>
            </div>
        </div>
        </BlogLayout>
    )

}