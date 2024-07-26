import { DetalleServicio } from "@/components/DetalleServicio"
import { info } from "@/data"

export default function ServiciosDetalle({ params }) {
    console.log(info.servicios)
    return (
    <>
    {
        info?.servicios.map((s) => {
            if (s.id === parseInt(params.id)) {
                return (
                    <DetalleServicio {...s} key={s.id} />
                )
            }
        })
    }
    </>
    ) 
}