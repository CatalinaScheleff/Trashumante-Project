import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef();
  const [showValidation, setShowValidation] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    fotografia: false,
    videoclip: false,
    produccionDeEventos: false,
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const { nombre, email, mensaje } = formData;
    if (!nombre || !email || !mensaje) {
      setShowValidation(true);
      return;
    }

    emailjs
      .sendForm(
        "service_64n06xt",
        "template_xlwnhzl",
        form.current,
        "TQVeMt3movr_IcdUN"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Mensaje enviado exitosamente!", {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            
          });
          // Clear form fields
          setFormData({
            nombre: "",
            email: "",
            mensaje: "",
            fotografia: false,
            videoclip: false,
            produccionDeEventos: false,
          });
          // Close dropdown
          setDropdownOpen(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setShowValidation(false);
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="md:pl-14 lg:pl-0">
      <label className="form-control w-full max-w-ls mb-5">
        <div className="label">
          <span className="label-text">Nombre</span>
        </div>
        <input
          type="text"
          placeholder="Escriba su nombre aquí"
          className="bg-gray-100 input w-full max-w-xl"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
        {showValidation && formData.nombre.length === 0 && (
          <span className="text-red-600 text-sm">Este campo es requerido</span>
        )}
      </label>
      <label className="form-control w-full max-w-ls mb-5">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="email"
          placeholder="Escriba su email aquí"
          className="bg-gray-100 input w-full max-w-xl"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {showValidation && formData.email.length === 0 && (
          <span className="text-red-600 text-sm">Este campo es requerido</span>
        )}
      </label>
      <div className="pb-4">
        <div className="label">
          <span className="label-text">
            ¿En qué servicios estás interesado?
          </span>
        </div>
        <div
          tabIndex={0}
          className={`collapse collapse-arrow max-w-xl bg-gray-100 ${
            dropdownOpen ? "collapse-open" : "collapse-close"
          }`}
        >
          <input type="checkbox" className="peer" onChange={toggleDropdown} />
          <div className="collapse-title text-ms text-gray-400">
            Seleccione servicios
          </div>
          <div className="collapse-content">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Fotografía</span>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-violet-600"
                  name="fotografia"
                  checked={formData.fotografia}
                  onChange={handleInputChange}
                  value={"Fotografía"}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Videoclip</span>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-violet-600"
                  name="videoclip"
                  checked={formData.videoclip}
                  onChange={handleInputChange}
                  value={"Videoclip"}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Producción de eventos</span>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-violet-600"
                  name="produccionDeEventos"
                  checked={formData.produccionDeEventos}
                  onChange={handleInputChange}
                  value={"Producción de eventos"}
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
          name="mensaje"
          rows="4"
          className="block p-2.5 w-full max-w-xl text-sm bg-gray-100 rounded-lg focus:ring-violet-600 focus:border-violet-600"
          placeholder="Escribe tu mensaje aquí..."
          value={formData.mensaje}
          onChange={handleInputChange}
        ></textarea>
        {showValidation && formData.mensaje.length === 0 && (
          <span className="text-red-600 text-sm">Este campo es requerido</span>
        )}
      </div>
      <div className="card-actions w-full max-w-xl justify-end">
        <button
          type="submit"
          value="Send"
          className="btn bg-violet-600 text-white hover:text-violet-600 border-solid border-2 border-violet-600"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
