import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import PropTypes from 'prop-types';


export function DetalleProyecto({ imgUrl, nombre, descripcion, url, redsocial, texto }) {
  
  const iconos = {
    Instagram: FaInstagram,
    Facebook: FaFacebook,
    Youtube: FaYoutube,
  };

  return (
    <main className="md:mx-16 pb-40 md:pb-20">
      <div className="bg-base-200 p-8 xl:p-20">
        <div className="grid lg:grid-cols-2 col-auto">
          <div className="col text-center grid place-items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{nombre}</h1>
            <p className="my-8 lg:mr-10">
              {texto}
                   </p>

            <div className="justify-center flex lg:mr-10 pb-10">
              {redsocial?.map((r) => {
                
                const IconComponent = iconos[r.icono];

                return (
                  <div key={r.id}>
                    <Link href={r.url} target="_blank" rel="noopener noreferrer">
                      <div className="w-8 h-8 bg-violet-200 text-gray-700 text-xl rounded-full grid place-items-center mx-2 hover:border-violet-600 hover:border-2">
                        <IconComponent />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div> 
          </div>

          <div className="col grid place-items-center">
            <div className="bg-gray-800 ">
              <Image
                src={imgUrl}
                alt={nombre}
                width={530}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

DetalleProyecto.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  redsocial: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      icono: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
  texto: PropTypes.string.isRequired,
};