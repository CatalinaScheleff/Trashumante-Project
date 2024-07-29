import Image from "next/image";
import Link from "next/link";
import { CardTrabajos } from "./Cards";
import PropTypes from 'prop-types';

export function DetalleEquipo ({imgUrl, nombre, descripcion, url, urlredsocial, redsocial, texto, trabajos}) {
    console.log(trabajos)
return (
    <main className="mt-16 ">
    <div className="md:mx-8 lg:m-20">
      <div className=" grid md:grid-cols-2 col-auto place-items-center ">

        <div className="col grid place-items-center">
          <figure className="row h-80 w-80 lg:w-96 lg:h-96 rounded-2xl">
            <Image
              src={imgUrl}
              alt=""
              width={384}
              height={384}
              className="w-full h-full object-cover rounded-2xl"
            />
          </figure>
          <Link
            href={urlredsocial}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-bold hover:text-violet-600"
          >
            {redsocial}
          </Link>
        </div>

        <div className="col px-5 mb-8 text-center">
          <h1 className="text-5xl font-bold mb-10 mt-5">{nombre}</h1>
          
          <p className=" my-8">
           {texto}
          </p>
        </div>
      </div>
    </div>

    <div className="hero min-h-full bg-base-200 mb-20 mt-8">
      <div className="text-center grid place-items-center">
        <div className=" mb-10">
          <h1 className="text-4xl font-bold">Trabajos</h1>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-8 place-items-center">
            {
                trabajos?.map((t) => {
                    return (
                        <>
                            <CardTrabajos {...t} key={t.id}/>
                        </>
                    )
                })
            }
        </div>
      </div>
    </div>

    <div className="h-28"></div>
  </main>
)
}

DetalleEquipo.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlredsocial: PropTypes.string.isRequired,
    redsocial: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    trabajos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        imgUrl: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  };