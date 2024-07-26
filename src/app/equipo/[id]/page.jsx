import Image from "next/image";
import { info } from "../../../data/index";
import Link from "next/link";
import { Detalle } from "@/components/DetalleEquipo";

export default function DetalleEquipo({ params }) {
  console.log(info);
  return (<>
  {
    info?.equipo.map((e) => {
        if (e.id === parseInt(params.id)) {
            return (
<Detalle {...e} key={e.id}/>
                
            )
        }
    })
  }
  </>
  );
}
