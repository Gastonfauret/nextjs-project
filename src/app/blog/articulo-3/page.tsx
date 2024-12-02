import Capy3 from "../../../../assets/blog/capy-3.webp"
import Image from 'next/image';
import BlogLayout from "../BlogLayout";

export default function Article3() {
    return (
        <BlogLayout headerText=" Articulo Nro. 3" footerText="Footer Articulo Nro. 3">
            <div className=" h-full w-fullh-full bg-green-100 flex items-center justify-center gap-5 flex-grow ">
                <Image className=" w-full h-full object-cover " src={Capy3} alt="logo-capy" />
                <div className=" flex flex-col m-5 gap-2">
                    <h1 className=" text-4xl font-serif ">Viven en grupos sociales.</h1>
                    <p className=" font-serif text-base">Suelen vivir en manadas de 10 a 20 individuos, aunque a veces forman grupos más grandes en temporada de lluvias. Son animales muy sociales que forman comunidades estables. En cada grupo suele haber un macho dominante, varias hembras y crías. La convivencia en grupo les ofrece protección contra depredadores y facilita la búsqueda de comida.</p>
                    <p className=" font-serif text-base">
                        son animales sociales por naturaleza. Viven en grupos jerárquicos que pueden variar en tamaño, generalmente entre 10 y 30 individuos, aunque en ambientes con abundancia de recursos pueden formar grupos más grandes. Dentro de estas comunidades, los capibaras muestran un comportamiento cooperativo, como el cuidado compartido de las crías, donde varios adultos ayudan a proteger y alimentar a las más jóvenes.
                    </p>
                    <p className=" font-serif text-base">
                        Además, los grupos están liderados por un macho dominante, quien controla el acceso a las hembras y marca su territorio mediante secreciones. Este comportamiento social les proporciona protección contra depredadores y fomenta la cohesión grupal, asegurando su supervivencia en ambientes tanto acuáticos como terrestres.
                        En muchas culturas de América del Sur, los capibaras han ganado un significado cultural, además de su importancia ecológica. En países como Venezuela y Argentina, se les considera un símbolo de la vida silvestre local y, a veces, son objeto de mitos y leyendas.
                    </p>
                </div>
            </div>
        </BlogLayout>
    )

}