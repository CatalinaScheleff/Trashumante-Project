import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { FiExternalLink } from 'react-icons/fi';

export function CardEquipo({ imgUrl, nombre, descripcion, url }) {
  return (
    <div className="card card-compact w-64 bg-base-100 shadow-xl">
      <figure className="h-64 w-64 bg-slate-600">
        <Image src={imgUrl} alt="" width={384} height={384} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{nombre}</h2>
        <p>{descripcion}</p>
        <div className="card-actions justify-end">
          <Link href={url}>
            <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">
              Más información
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

CardEquipo.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export function CardServicios({ imgUrl, nombre, descripcion, url }) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="h-56">
        <Image src={imgUrl} alt="Shoes" width={384} height={224} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{nombre}</h2>
        <p>{descripcion}</p>
        <div className="card-actions justify-end">
          <Link href={url}>
            <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">
              Más información
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

CardServicios.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};


export function CardProyectos({ imgUrl, nombre, descripcion, url }) {
  return (
<div className="card card-compact w-[512px] bg-base-100 shadow-xl ">
  <figure className="bg-slate-600">
    <Image src={imgUrl} alt="Shoes" width={512} height={656} className="w-full h-full object-cover"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{nombre}</h2>
    <p>{descripcion}</p>
    <div className="card-actions justify-end">
        <Link href={url}>
      <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">
        Más información
      </button>
        </Link>
    </div>
  </div>
</div>
  );
}

CardProyectos.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};


export function CardTrabajos({ imgUrl, nombre, descripcion, url }) {
  return (
    <Link href={"https://youtu.be/eYV335fxT4o?si=dmuq5n4OAtNUsbHR"} target="_blank" rel="noopener noreferrer">
    <div className="card card-compact w-80 bg-base-100 shadow-xl">
    <figure className="h-56">
      <Image src="/inicio.png" alt="Shoes" width={384} height={224} />
      </figure>
    <div className="card-body">
      <h2 className="card-title hover:text-violet-600">Videoclip Serpiente <FiExternalLink className="text-xl hover:text-violet-600"/></h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        {/* <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">
        <FiExternalLink className="text-xl"/>
        </button> */}
      </div>
    </div>
  </div>
        </Link>
  );
}

CardProyectos.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};