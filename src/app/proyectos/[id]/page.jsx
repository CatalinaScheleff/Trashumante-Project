import { DetalleProyecto } from "@/components/DetalleProyecto"
import { info } from "@/data"
export default function ProyectosDetalle({ params }) {
    return (
    <>
    {
        info?.proyectos.map((p) => {
            if (p.id === parseInt(params.id)) {
                return (
                    <DetalleProyecto {...p} key={p.id} />
                )
            }
        })
    }
    </>
    )
  }