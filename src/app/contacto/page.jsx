const Contacto = () => {
  return (
    <main className="pb-16">
      <div className="grid-cols-2 grid p-10">
         {/* col 1 */}
        <div className="pl-16 w-full max-w-xl">
          <h1 className="text-5xl font-bold pt-4 pb-10">Contacto</h1>
          <p className="pb-8">
            Have some big idea or brand to develop and need help? Then reach out
            we&apos;d love to hear about your project and provide help
          </p>
          <h2 className="text-2xl font-bold pb-3">Email</h2>
          <p className="pb-8">info@trashumante.cl</p>
          <h2 className="text-2xl font-bold pb-3">Redes Sociales</h2>
          <p className="pb-3">Instagram</p>
          <p className="pb-3">Youtube</p>
          <p className="pb-3">Facebook</p>
        </div>

{/* col s */}
        <div className="">
          <label className="form-control w-full max-w-ls mb-5">
            <div className="label">
              <span className="label-text">Nombre</span>
            </div>
            <input
              type="text"
              placeholder="Escriba su nombre aquí"
              className="bg-gray-100 input w-full max-w-xl"
            />
          </label>
          <label className="form-control w-full max-w-ls mb-5">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="Escriba su email aquí"
              className="bg-gray-100 input w-full max-w-xl"
            />
          </label>
          <div className="pb-4">
          <div className="label">
            <span className="label-text">
              ¿En qué servicios estás interesado?
            </span>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow max-w-xl bg-gray-100"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-ms text-gray-400 ">
              Seleccione servicios
            </div>
            <div className="collapse-content">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Fotografía</span>
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-violet-600"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Videoclip</span>
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-violet-600"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Producción de eventos</span>
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-violet-600"
                  />
                </label>
              </div>
            </div>
          </div>
          </div>
          <div className="pb-5">
          <div className="label">
            <span className="label-text">Mensaje</span>
          </div>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full max-w-xl text-sm bg-gray-100 rounded-lg focus:ring-violet-600 focus:border-violet-600"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
          </div>
        <div className="card-actions w-full max-w-xl justify-end">
      <button className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">Enviar</button>
    </div>
        </div>
      </div>
    </main>
  );
};

export default Contacto;
