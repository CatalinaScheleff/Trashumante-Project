import React, { useRef, useClient, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [showValidation, setShowValidation] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();

      const nombre = form.current['nombre'].value;
      const email = form.current['email'].value;
      const mensaje = form.current['mensaje'].value;
      if (!nombre || !email || !mensaje) {
        setShowValidation(true); // Activar mensajes de validación
        alert("Por favor complete todos los campos");
        return;
      }
  
      emailjs
        .sendForm('service_64n06xt', 'template_xlwnhzl', form.current, {
          publicKey: 'TQVeMt3movr_IcdUN',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert("Mensaje enviado con exito")
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    const handleInputChange = (e) => {
      setShowValidation(false);
    };


    return ( 
        <form ref={form} onSubmit={sendEmail} className="">
          <label className="form-control w-full max-w-ls mb-5">
            <div className="label">
              <span className="label-text">Nombre</span>
            </div>
            <input
              type="text"
              placeholder="Escriba su nombre aquí"
              className="bg-gray-100 input w-full max-w-xl"
              name='nombre'
              onChange={handleInputChange}
            />
            {showValidation && form.current['nombre'].value.length === 0 && <span className="text-red-600 text-sm">Este campo es requerido</span>}
          </label>
          <label className="form-control w-full max-w-ls mb-5">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder="Escriba su email aquí"
              className="bg-gray-100 input w-full max-w-xl"
              name='email'
              onChange={handleInputChange}
            />
            {showValidation && form.current['email'].value.length === 0 && <span className="text-red-600 text-sm">Este campo es requerido</span>}
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
                  <input type="checkbox" className="w-5 h-5 accent-violet-600" name="fotografia" value="Fotografía" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Videoclip</span>
                  <input type="checkbox" className="w-5 h-5 accent-violet-600" name="videoclip" value="Videoclip" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Producción de eventos</span>
                  <input type="checkbox" className="w-5 h-5 accent-violet-600" name="produccionDeEventos" value="Producción de eventos" />
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
            name='mensaje'
            rows="4"
            className="block p-2.5 w-full max-w-xl text-sm bg-gray-100 rounded-lg focus:ring-violet-600 focus:border-violet-600"
            placeholder="Escribe tu mensaje aquí..."
            onChange={handleInputChange}
          ></textarea>
          {showValidation && form.current['mensaje'].value.length === 0 && <span className="text-red-600 text-sm">Este campo es requerido</span>}
          </div>
        <div className="card-actions w-full max-w-xl justify-end">
      <button type='sumbit' value="Send" className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600">Enviar</button>
    </div>
        </form>
     );
}
 
export default ContactForm;