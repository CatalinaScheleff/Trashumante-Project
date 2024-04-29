


export default function Inicio() {
  return (
    <main>

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
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">Contáctanos</button>
    </div>
    <div className="col grid place-items-center">

    <div className="bg-gray-800 mx-10 w-[700px] h-[400px]">

    </div>
    </div>
  </div>
</div>

    </main>
  );
}
