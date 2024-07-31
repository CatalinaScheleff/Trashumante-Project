import Image from "next/image";
import Link from "next/link";
import {info} from '../../data/index'
import {CardEquipo} from "@/components/Cards";

const Equipo = () => {
 console.log(info)
  return (
    <main className="lg:mx-24 pb-20 md:pb-4">
      <div className="px-5 text-center mt-6 lg:mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-16">Equipo</h1>
      </div>

        
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">     

          {
                info?.equipo.map((e) => {
                  
                    return (
                        <>
                            <CardEquipo {...e} />
                        </>
                       
                    )
                })
            }
            </div>

            <div className="h-28"></div>

          
        
      
    </main>
  );
};

export default Equipo;
