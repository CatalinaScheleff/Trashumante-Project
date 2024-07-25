import Image from "next/image";
import Link from "next/link";
import {info} from '../../data/index'
import CardEquipo from "@/components/Cards";

const Equipo = () => {
 
  return (
    <main className="mx-24">
      <div className="px-5 text-center mt-16">
        <h1 className="text-5xl font-bold mb-16">Equipo</h1>
      </div>

        
          <div className="grid gap-8 grid-cols-4 place-items-center">     

          {
                info?.equipo.map((s) => {
                  
                    return (
                        <>
                            <CardEquipo {...s} />
                        </>
                       
                    )
                })
            }




{/* <div className="card card-compact w-64 bg-base-100 shadow-xl ">
  <figure className="h-64 w-64 bg-slate-600">
    <Image src="/inicio.png" alt="Shoes" width={384} height={384} className="w-full h-full object-cover"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Bayron Espinoza</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
        <Link href={"/equipo/bayronespinoza"}>
      <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">
        Más información
      </button>
        </Link>
    </div>
  </div>
</div>

<div className="card card-compact w-64 bg-base-100 shadow-xl ">
  <figure className="h-64 w-64 bg-slate-600">
    <Image src="/inicio.png" alt="Shoes" width={384} height={384} className="w-full h-full object-cover"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Bayron Espinoza</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
        <Link href={"/equipo/bayronespinoza"}>
      <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">
        Más información
      </button>
        </Link>
    </div>
  </div>
</div>

<div className="card card-compact w-64 bg-base-100 shadow-xl ">
  <figure className="h-64 w-64 bg-slate-600">
    <Image src="/inicio.png" alt="Shoes" width={384} height={384} className="w-full h-full object-cover"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Bayron Espinoza</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
        <Link href={"/equipo/bayronespinoza"}>
      <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">
        Más información
      </button>
        </Link>
    </div>
  </div>
</div>

<div className="card card-compact w-64 bg-base-100 shadow-xl ">
  <figure className="h-64 w-64 bg-slate-600">
    <Image src="/inicio.png" alt="Shoes" width={384} height={384} className="w-full h-full object-cover"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Bayron Espinoza</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
        <Link href={"/equipo/bayronespinoza"}>
      <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">
        Más información
      </button>
        </Link>
    </div>
  </div>
</div> */}



            

            </div>

            <div className="h-28"></div>

          
        
      
    </main>
  );
};

export default Equipo;
