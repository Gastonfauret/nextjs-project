import Capy2 from "../../../../assets/blog/capy-2.webp"
import Image from 'next/image';
import BlogLayout from "../BlogLayout";

export default function Article2() {
    return (
        <BlogLayout headerText=" Articulo Nro. 2" footerText="Footer Articulo Nro. 2">
        <div className=" h-full w-fullh-full bg-green-100 flex items-center justify-center gap-5 flex-grow">
            <Image className=" w-full " src={Capy2} alt="logo-capy" />
            <div className=" flex flex-col m-5 gap-2">
                <h1 className=" text-4xl font-serif ">Son excelentes nadadores.</h1>
                <p className=" font-serif text-base">Los carpinchos son nadadores excepcionales, gracias a una combinación de adaptaciones físicas que los hacen sobresalir en el agua. Sus patas parcialmente palmeadas les permiten moverse con rapidez y agilidad en ríos, lagos y pantanos, donde pasan gran parte de su vida. Además, su cuerpo alargado y robusto está diseñado para ofrecer una flotabilidad eficiente, mientras que su pelaje corto y denso repele el agua, evitando que se enfríen rápidamente. Estas características los convierten en animales semiacuáticos ideales para sobrevivir en hábitats húmedos.</p>
                <p className=" font-serif text-base">El agua no solo es un medio de transporte para los carpinchos, sino también un refugio vital contra depredadores como jaguares y caimanes. Cuando se sienten amenazados, pueden sumergirse completamente y permanecer bajo el agua durante varios minutos, dejando solo la nariz y los ojos expuestos para respirar y observar su entorno. Esto les permite escapar con frecuencia de sus perseguidores y mantenerse seguros en ambientes peligrosos.</p>
                <p className=" font-serif text-base">Además de ser una herramienta de supervivencia, la natación es esencial para su alimentación y reproducción. Los carpinchos se alimentan de plantas acuáticas, hierba y cortezas que encuentran en las zonas cercanas al agua. También suelen aparearse dentro o cerca del agua, aprovechando la sensación de seguridad que este medio les brinda. En resumen, su habilidad para nadar es una parte integral de su estilo de vida, permitiéndoles prosperar en entornos donde pocos otros mamíferos podrían adaptarse tan bien.</p>
            </div>

        </div>
        </BlogLayout>
    )

}