import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const CineClubAliciaVega = () => {
  return (
    <main className="mx-16">
      <div className=" bg-base-200 p-20">
  <div className=" grid grid-cols-2 col-auto">

    <div className="col">
      <h1 className="text-5xl font-bold">Cine Club Alicia Vega</h1>
      <p className="my-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className="my-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className="my-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
      <div className="justify-content-center flex">

      <Link href={"https://www.instagram.com/cineclub.aliciavega/"} target="_blank" rel="noopener noreferrer">
      <div className="w-8 h-8 bg-violet-200 rounded-full grid place-items-center mx-2 hover:border-violet-600 hover:border-2">
          <FaInstagram className="text-gray-700 text-xl" />
        </div>
      </Link>

      <Link href={""} target="_blank" rel="noopener noreferrer">
        <div className="w-8 h-8 bg-violet-200 rounded-full grid place-items-center mx-2 hover:border-violet-600 hover:border-2">
          <FaFacebook className="text-gray-700 text-xl" />
        </div>
      </Link>

      <Link href={""} target="_blank" rel="noopener noreferrer">
        <div className="w-8 h-8 bg-violet-200 rounded-full grid place-items-center mx-2 hover:border-violet-600 hover:border-2">
          <FaYoutube className="text-gray-700 text-xl" />
        </div>
      </Link>
      </div>
      
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

export default CineClubAliciaVega;
