import Image from "next/image";
import { info } from "../../../data/index";
import Link from "next/link";
import { DetalleEquipo } from "@/components/DetalleEquipo";

export default function EquipoDetalle({ params }) {
  console.log(info);
  return (<>
  {
    info?.equipo.map((e) => {
        if (e.id === parseInt(params.id)) {
            return (
<DetalleEquipo {...e} key={e.id}/>
                
            )
        }
    })
  }
  </>
  );
}
