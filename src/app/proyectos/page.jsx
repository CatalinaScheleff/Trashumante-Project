import { CardProyectos } from "@/components/Cards";
import Image from "next/image";
import Link from "next/link";
import {info} from "../../data/index"

const Proyectos = () => {
  console.log(info)
  return (
    <main className="mx-24">
      <div className="px-5 text-center mt-16">
        <h1 className="text-5xl font-bold mb-16">Proyectos</h1>
      </div>

        
          <div className="grid gap-x-8 gap-y-12 grid-cols-2 place-items-center"> 

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
