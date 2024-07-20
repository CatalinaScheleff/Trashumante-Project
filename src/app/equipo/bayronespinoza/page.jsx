import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const BayronEspinoza = () => {

    return (
<main className="mt-16">
      <div className="hero">
        <div className="hero-content grid grid-cols-2 col-auto">

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


<div className="col grid place-items-center">
          <figure className="row h-96 w-96 bg-slate-600 rounded-2xl">
    <Image src="/inicio.png" alt="Shoes" width={384} height={384} className="w-full h-full object-cover rounded-2xl"/>
  </figure>
  <Link href={"https://www.instagram.com/bayron.exe"} className="mt-2 text-violet-600">
  @bayron.exe
  </Link>
  </div>

<div className="px-5 w-screen">

  <h1 className="text-2xl font-bold mb-8">Trabajos</h1>
  <div className="justify-start flex">

  <h1 className=" font-bold mb-3 hover:text-violet-600">VideoClip Serpiente</h1>
  <FiExternalLink className="mx-1 mt-0.5"/>
  </div>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.
            </p>


</div>



        </div>
      </div>
      <div className="h-28"></div>
    </main>
    )
}

export default BayronEspinoza;
