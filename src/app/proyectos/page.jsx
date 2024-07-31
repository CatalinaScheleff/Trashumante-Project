import { CardProyectos } from "@/components/Cards";
import Image from "next/image";
import Link from "next/link";
import {info} from "../../data/index"

const Proyectos = () => {
  console.log(info)
  return (
    <main className="px-8 md:mx-24 pb-20">
      <div className="px-5 text-center mt-8 lg:mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-16">Proyectos</h1>
      </div>

        
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 place-items-center"> 

{
  info?.proyectos.map((p) => {
    return (
    <>
      <CardProyectos {...p}/>
    </>)
  }
  )
}








            

            </div>

            <div className="h-28"></div>

          
        
      
    </main>
  );
};

export default Proyectos;
