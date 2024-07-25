import { CardTrabajos } from "@/components/Cards";
import Image from "next/image";
import Link from "next/link";
import {info} from "../../../data/index"

const BayronEspinoza = () => {
console.log(info)
    return (
<main className="mt-16 ">
      <div className="m-20">
        <div className=" grid grid-cols-2 col-auto place-items-center ">

            <div className="col grid place-items-center">
          <figure className="row h-96 w-96 rounded-2xl">
    <Image src="/inicio.png" alt="Shoes" width={384} height={384} className="w-full h-full object-cover rounded-2xl"/>
  </figure>
  <Link href={"https://www.instagram.com/bayron.exe"} target="_blank" rel="noopener noreferrer" className="mt-2 text-bold hover:text-violet-600">
  @bayron.exe
  </Link>
  </div>

          <div className="col px-5 mb-8">
            <h1 className="text-5xl font-bold mb-10">Bayron Espinoza</h1>
            <p className="my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.
            </p>
            <p>
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.
            </p>
            <p>
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.
            </p>
          </div>

          </div>
          </div>




          <div className="hero min-h-full bg-base-200 mb-20 mt-8">
  <div className="text-center grid place-items-center">

    <div className="w-[800px] mb-10">
<h1 className="text-4xl font-bold">Trabajos</h1>
     
    </div>

<div className="grid grid-cols-3 gap-x-20 gap-y-8 place-items-center">

{/* {
  info?.equipo?.trabajos.map((t) => {
    return (
      <>
        <CardTrabajos {...t} />
      </>
    )
  })
} */}





</div>
  </div>
</div>




{/* <div className="px-5 w-screen  bg-slate-500">
<div className="text-center">

  <h1 className="text-3xl font-bold mb-8">Trabajos</h1>
</div>
  <div className="justify-start flex">

  <h1 className=" font-bold mb-3 hover:text-violet-600">VideoClip Serpiente</h1>
  <FiExternalLink className="mx-1 mt-0.5"/>
  </div>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.
            </p>


</div> */}



     

      <div className="h-28"></div>
    </main>
    )
}

export default BayronEspinoza;
