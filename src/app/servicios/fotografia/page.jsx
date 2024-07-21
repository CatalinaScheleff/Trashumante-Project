import Image from "next/image";
import Link from "next/link";

const Fotografia = () => {
  return (
    <main className="mx-16">
      <div className=" bg-base-200 p-20">
  <div className=" grid grid-cols-2 col-auto">

    <div className="col">
      <h1 className="text-5xl font-bold">Fotografía</h1>
      <p className="my-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className="my-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className="my-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link href={'/contacto'}>
      <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">Contáctanos</button>
      </Link>
    </div>

    <div className="col grid place-items-center">
    <div className="bg-gray-800 w-[530px] h-[420px]">
    </div>
    </div>
  </div>
</div>
      
    </main>
  );
};

export default Fotografia;
