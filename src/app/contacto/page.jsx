'use client'
import React, { useClient } from 'next';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';


const Contacto = () => {

  return (
    <main className="pb-36">
      <div className="lg:grid-cols-2 grid p-10">
         {/* col 1 */}
        <div className="md:pl-28 lg:px-4 xl:pl-16 w-full max-w-xl text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pt-4 pb-10 ">Contacto</h1>
          <p className="pb-8 ">
            Have some big idea or brand to develop and need help? Then reach out
            we&apos;d love to hear about your project and provide help
          </p>
          <h2 className="text-2xl font-bold pb-3">Email</h2>
          <Link href={'mailto:info@trashumante.cl'}>
          <p className="pb-8 hover:text-violet-600">info@trashumante.cl</p>
          </Link>
          <h2 className="text-2xl font-bold pb-3">Redes Sociales</h2>
          <Link href={"https://www.instagram.com/trashumanteaudiovisual/"}
          target="_blank"
          rel="noopener noreferrer">
          <p className="pb-3 hover:text-violet-600">Instagram</p>
          </Link>
          <Link href={"https://www.youtube.com/@trashumante_audiovisual"}
          target="_blank"
          rel="noopener noreferrer">
          <p className="pb-3 hover:text-violet-600">Youtube</p>
          </Link>
          <Link href={"https://www.facebook.com/profile.php?id=100009760328604"}
          target="_blank"
          rel="noopener noreferrer">
          <p className="pb-3 hover:text-violet-600">Facebook</p>
          </Link>
        </div>

{/* col 2 */}
<div>
        <ContactForm/>
</div>
      </div>
    </main>
  );
};

export default Contacto;
