"use client"


import { useEffect } from 'react';
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Navbar = () => {

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdowns = document.querySelectorAll("details[open]");
      dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(event.target)) {
          dropdown.removeAttribute("open");
        }
      });
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDetailsClick = (event) => {
    event.target.closest('details').removeAttribute('open');
  };

  return (
    <div className="navbar bg-base-100 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a onClick={handleDetailsClick}>Item 1</a></li>
            <li>
              <a onClick={handleDetailsClick}>Parent</a>
              <ul className="p-2">
                <li><a onClick={handleDetailsClick}>Submenu 1</a></li>
                <li><a onClick={handleDetailsClick}>Submenu 2</a></li>
              </ul>
            </li>
            <li><a onClick={handleDetailsClick}>Item 3</a></li>
          </ul>
        </div>

        <Link href={'/'} className="btn btn-ghost text-sm">
          TRASHUMANTE
        </Link>
        <div className="navbar-center hidden mx-4 lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Nosotros</summary>
                <ul className="p-2 bg-white">
                  <li><Link href={'/quienessomos'} onClick={handleDetailsClick}>¿Quienes Somos?</Link></li>
                  <li><Link href={'/equipo'} onClick={handleDetailsClick}>Equipo</Link></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Servicios</summary>
                <ul className="p-2 bg-white">
                  <li><a onClick={handleDetailsClick}>Fotografía</a></li>
                  <li><a onClick={handleDetailsClick}>VideoClip</a></li>
                  <li><a onClick={handleDetailsClick}>Producción de Eventos</a></li>
                </ul>
              </details>
            </li>
            <li><a>Proyectos</a></li>
            <li><a>Galería</a></li>
            <li><Link href={'/contacto'}>Contacto</Link></li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <div className="w-8 h-8 bg-violet-200 rounded-full grid place-items-center mx-2">
          <FaInstagram className="text-gray-700 text-xl" />
        </div>
        <div className="w-8 h-8 bg-violet-200 rounded-full grid place-items-center mx-2">
          <FaFacebook className="text-gray-700 text-xl" />
        </div>
        <div className="w-8 h-8 bg-violet-200 rounded-full grid place-items-center mx-2">
          <FaYoutube className="text-gray-700 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar
