


export default function Inicio() {
  return (
    <main className="pb-16">

  {/* Hero 1 */}
     <div
        className="hero h-[550px] bg-cover bg-center"
        style={{ backgroundImage: `url(/inicio.png)` }}
      >
       
      </div>
      <div className="text-center m-5">
        <div>
          <h1 className="text-[60px] font-bold">Trashumante Audiovisual</h1>
        </div>
       
        <div className="m-4">
          <p>
            From the small stuff to the big picture, organizes the work so teams
            know what to do, why it matters, and how to get it done.
          </p>
      
        </div>
      </div>

{/* Hero 2 */}
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content grid grid-cols-5 col-auto">
    <div className="col-span-2">
      <h1 className="text-5xl font-bold">Conoce nuestro trabajo</h1>
      <p className="my-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">Contáctanos</button>
    </div>
    <div className="col grid place-items-center">
    <div className="bg-gray-800 mx-10 w-[700px] h-[400px]">
    </div>
    </div>
  </div>
</div>

{/* Hero 3 */}

<div className="hero min-h-full bg-base-200 mb-20">

  <div className="text-center grid place-items-center">

    <div className="w-[800px] mb-10">
<h1 className="text-5xl font-bold">Servicios</h1>
      <p className="my-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>

<div className="grid grid-cols-3 gap-8 place-items-center">

  <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure className="h-56"><img src="/inicio.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Fotografía</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">Más información</button>
    </div>
  </div>
</div>

<div className="card card-compact w-96 bg-base-100 shadow-xl">
<figure className="h-56"><img src="/inicio.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">VideoClip</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">Más información</button>
    </div>
  </div>
</div>

<div className="card card-compact w-96 bg-base-100 shadow-xl">
<figure className="h-56"><img src="/inicio.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Producción de eventos</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">Más información</button>
    </div>
  </div>
</div>

</div>
  </div>
</div>


    </main>
  );
}
