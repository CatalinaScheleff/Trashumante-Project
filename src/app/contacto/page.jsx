'use client'
import React, { useClient } from 'next';
import ContactForm from '@/components/ContactForm';


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

{/* col 2 */}
        <ContactForm/>
      </div>
    </main>
  );
};

export default Contacto;
