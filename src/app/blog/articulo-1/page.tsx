import Capy1 from "../../../../assets/blog/capy-1.webp"
import Image from 'next/image';
import BlogLayout from "../BlogLayout";

export default function Article1() {
    return (
        <BlogLayout headerText=" Articulo Nro. 1" footerText="Footer Articulo Nro. 1">
            <div className=" h-full w-fullh-full bg-green-100 flex items-center justify-center p-5 gap-5">
                <Image className=" w-full " src={Capy1} alt="logo-capy" />

                <div className=" flex flex-col m-5 gap-2 xl:gap-10">
                    <h1 className=" text-4xl font-serif xl:text-4xl">Los roedores mas grandes del mundo.</h1>
                    <p className=" font-serif text-base xl:text-xl">Los carpinchos, también conocidos como capibaras, ostentan el título de los roedores más grandes del mundo. Pueden llegar a medir entre 1 y 1.3 metros de largo, con una altura de aproximadamente 50 cm desde el suelo hasta los hombros. En cuanto a peso, los adultos oscilan entre los 35 y los 66 kg, aunque algunos ejemplares pueden superar este rango bajo condiciones óptimas. Su tamaño es tan imponente que a menudo se les compara con un perro mediano, lo que los hace destacar entre las 2,000 especies de roedores que existen en el mundo.</p>
                    <p className=" font-serif text-base xl:text-xl">Este tamaño no es solo una curiosidad, sino que tiene un papel importante en su adaptación al entorno. Su robusto cuerpo está diseñado para almacenar energía y resistir climas cálidos y húmedos. Además, su tamaño les brinda cierta ventaja frente a depredadores, ya que no todos los animales son capaces de enfrentarse a ellos fácilmente. Sin embargo, también los hace más visibles en hábitats abiertos, lo que aumenta su dependencia de los refugios acuáticos para sobrevivir.</p>
                    <p className=" font-serif text-base xl:text-xl">El hecho de que sean los roedores más grandes también los convierte en un foco de interés para los humanos. En algunas regiones, su carne es valorada y su tamaño los hace atractivos para la domesticación o exhibición en zoológicos. A pesar de su imponencia, los carpinchos mantienen una naturaleza pacífica y sociable, lo que los hace aún más fascinantes como gigantes gentiles del reino animal.</p>
                </div>

            </div>
        </BlogLayout>
    )

}