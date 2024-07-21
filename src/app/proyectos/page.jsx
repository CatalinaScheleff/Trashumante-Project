import Image from "next/image";
import Link from "next/link";

const Proyectos = () => {
  return (
    <main className="mx-24">
      <div className="px-5 text-center mt-16">
        <h1 className="text-5xl font-bold mb-16">Proyectos</h1>
      </div>

        
          <div className="grid gap-x-8 grid-cols-2 place-items-center"> 

          <div className="col grid gap-y-12">

<div className="card card-compact w-[512px] bg-base-100 shadow-xl ">
  <figure className="bg-slate-600">
    <Image src="/inicio.png" alt="Shoes" width={512} height={656} className="w-full h-full object-cover"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Cine Club Alicia Vega</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
        <Link href={"/proyectos/cineclubaliciavega"}>
      <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">
        Más información
      </button>
        </Link>
    </div>
  </div>
</div>

<div className="card card-compact w-[512px] bg-base-100 shadow-xl ">
  <figure className="h-[512] w-[656] bg-slate-600">
    <Image src="/inicio.png" alt="Shoes" width={512} height={656} className="w-full h-full object-cover"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Cine Club Alicia Vega</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
        <Link href={"/proyectos/cineclubaliciavega"}>
      <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">
        Más información
      </button>
        </Link>
    </div>
  </div>
</div>

</div>

<div className="col grid gap-y-12">

<div className="card card-compact w-[512px] bg-base-100 shadow-xl ">
  <figure className="h-[512] w-[656] bg-slate-600">
    <Image src="/inicio.png" alt="Shoes" width={512} height={656} className="w-full h-full object-cover"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Cine Club Alicia Vega</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
        <Link href={"/proyectos/cineclubaliciavega"}>
      <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">
        Más información
      </button>
        </Link>
    </div>
  </div>
</div>

<div className="card card-compact w-[512px] bg-base-100 shadow-xl ">
  <figure className="h-[512] w-[656] bg-slate-600">
    <Image src="/inicio.png" alt="Shoes" width={512} height={656} className="w-full h-full object-cover"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Cine Club Alicia Vega</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
        <Link href={"/proyectos/cineclubaliciavega"}>
      <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">
        Más información
      </button>
        </Link>
    </div>
  </div>
</div>

</div>




            

            </div>

            <div className="h-28"></div>

          
        
      
    </main>
  );
};

export default Proyectos;
