import Image from "next/image";
import Link from "next/link";
import PropTypes from 'prop-types';

export function DetalleServicio ({imgUrl, nombre, descripcion, url, urlgaleria, galeria, texto}) {
    return (
        <main className="mx-16">
        <div className=" bg-base-200 p-20">
    <div className=" grid grid-cols-2 col-auto">
  
      <div className="col">
        <h1 className="text-5xl font-bold">{nombre}</h1>
        <p className="my-8 mr-10">{texto} </p>
        <Link href={urlgaleria}>
        <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">{galeria}</button>
        </Link>
        <Link href={'/contacto'} className="mx-3">
        <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">Contáctanos</button>
        </Link>
      </div>
  
      <div className="col grid place-items-center">
      <div className="bg-gray-800 w-[530px] h-[420px]">
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