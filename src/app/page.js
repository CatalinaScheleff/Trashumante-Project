'use client'
import Image from "next/image";
import Link from "next/link";
import { info } from "../data/index";
import { CardServicios } from "@/components/Cards";
import YouTube from "react-youtube";

export default function Inicio() {
  console.log(info);
  return (
    <main className=" pb-24 md:pb-16 ">
      {/* 1 */}
      <div
        className="h-[200px] w-screen bg-cover bg-center md:h-[300px] lg:h-[550px]"
        style={{ backgroundImage: `url(/inicio.png)` }}
      ></div>
      <div className="text-center m-5">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Trashumante Audiovisual
          </h1>
        </div>

        <div className="m-4">
          <p>
            From the small stuff to the big picture, organizes the work so teams
            know what to do, why it matters, and how to get it done.
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className=" min-w-screen bg-base-200 grid place-items-center my-32">
        <div className=" grid place-items-center lg:grid-cols-2 xl:w-4/5 col-auto">
          <div className=" grid place-items-center text-center px-10 ">
            <h1 className="text-3xl md:text-[4xl] lg:text-5xl font-bold">Conoce nuestro trabajo</h1>
            <p className="my-8">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link href={"/contacto"}>
              <button className="btn mb-4 bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">
                Contáctanos
              </button>
            </Link>
          </div>
          <div className="  ">
            <div className=" md:mx-10 w-[300px] lg:w-[400px]  md:w-[600px]  xl:w-[600px] ">
              <YouTube videoId="eYV335fxT4o" loading="lazy" iframeClassName="w-full"/>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}

      <div className=" min-h-full bg-base-200 mb-20">
        <div className="text-center grid place-items-center">
          <div className="w-screen mb-10 grid place-items-center text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Servicios</h1>
            <p className="py-8">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {info?.servicios.map((s) => {
              return (
                <>
                  <CardServicios {...s} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
