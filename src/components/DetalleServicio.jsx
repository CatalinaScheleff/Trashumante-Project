import Image from "next/image";
import Link from "next/link";
import PropTypes from 'prop-types';

export function DetalleServicio ({imgUrl, nombre, descripcion, url, urlgaleria, galeria, texto}) {
    return (
        <main className="xl:mx-16 pb-10">
        <div className=" bg-base-200 lg:p-20 p-8">
    <div className=" grid lg:grid-cols-2 lg:col-auto">
  
      <div className="lg:col text-center mb-12 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{nombre}</h1>
        <p className="my-8 lg:mr-10">{texto} </p>
        <Link href={urlgaleria}>
        <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">{galeria}</button>
        </Link>
        <Link href={'/contacto'} className="mx-3">
        <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">Contáctanos</button>
        </Link>
      </div>
  
      <div className="lg:col grid place-items-center mb-28 md:mb-12">
      <div className="bg-gray-800">
      <Image
              src={imgUrl}
              alt=""
              width={530}
              height={420}
              className="w-full h-full object-cover"
            />
      </div>
      </div>

    </div>
  </div>
        
      </main>
    )
}

DetalleServicio.PropTypes = {
    imgUrl: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlgaleria: PropTypes.string.isRequired,
    galeria: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired
}