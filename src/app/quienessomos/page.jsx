import Image from "next/image";

const QuienesSomos = () => {
  return (
    <main className="pb-40">
      <div className="mx-8 lg:mx-20 mt-6 lg:mt-24">
        <div className=" grid md:grid-cols-2 col-auto">

          <div className="col lg:px-5 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">¿Quienes Somos?</h1>
            <p className="my-8">
            Trashumante Audiovisual es una cooperativa de trabajo liderada, principalmente, por mujeres realizadoras audiovisuales. Se constituye el año 2016 con 5 socios, con el fin de ejercer el oficio. Actualmente son 9 miembros activos, quienes a partir de los valores cooperativos de educación, colaboración y rescate de la cultura, se desempeñan en gestión de proyectos culturales y realización audiovisual. El trabajo colaborativo de sus cooperados, se destaca por la creatividad, el interés social, la responsabilidad, vinculación asociativa con otras cooperativas y entidades de la economía social y solidaria. Realizan videos corporativos, educacionales y documentales, como Vidiella el archivo de una bestia, financiado por la U. Católica y cortometrajes. También autogestionan proyectos propios como el cortometraje Sequía (3º Lugar Fest. Ibero À 2021) y los documentales “Somos el río” y “Pasa la calle”. Además realiza el Cineclub Alicia Vega un espacio de exhibición y difusión de películas y proyectos audiovisuales, principalmente chilenos, el Cineclub contribuye a difundir la actividad cultural a más de XXX personas/vecinos en el año, ya que las actividades se realizan 2 veces al mes y una difusión constante en las redes sociales de la organización cultural. La Organización está compuesta por su asamblea, Inspector de cuentas y Gerente Administrativa. Además dentro de la Cooperativa rotan los liderazgos en los distintos proyectos de acuerdo a la expertise de cada unx y en el trabajo práctico de la producción audiovisual cada unx desempeña su rol dentro del equipo: dirección, producción, guión, fotografía y cámara, sonido y montaje.

           </p>
           
          </div>

          <div className="col grid xl:grid-cols-2 xl:grid-rows-6 h-[1000px] xl:h-[560px] md:mx-4 lg:mx-12 mt-8">
            <div className="col-span-1 row-span-5 bg-slate-600"> 
            <Image
              src={'/1.jpg'}
              alt=""
              width={650}
              height={560}
              className="w-full h-full object-cover"
            />
            </div>
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-5 bg-slate-600"> 
            <Image
              src={'/2.jpg'}
              alt=""
              width={650}
              height={560}
              className="w-full h-full object-cover"
            />
            </div>
            <div className="col-span-1 row-span-1"></div>
            
          </div>

        </div>
      </div>
    </main>
  );
};

export default QuienesSomos;


{/* <div className="hero">
        <div className="hero-content grid grid-cols-2 col-auto">

          <div className="col px-5">
            <h1 className="text-5xl font-bold mb-10">¿Quienes Somos?</h1>
            <p className="my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.
            </p>
            <p>
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.
            </p>
            <p>
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.
            </p>
          </div>

          <div className="col grid grid-cols-2 grid-rows-6 h-[560px]">
            <div className="col-span-1 row-span-5 bg-slate-600"> imagen</div>
            <div className="col-span-1 row-span-1"> col2</div>
            <div className="col-span-1 row-span-5 bg-slate-600"> imagen</div>
            <div className="col-span-1 row-span-1"> col1</div>
            
          </div>

        </div>
      </div> */}