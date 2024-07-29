"use client";
 
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const openDropdowns = document.querySelectorAll("details[open]");
      openDropdowns.forEach((dropdown) => {
        if (!dropdown.contains(event.target)) {
          dropdown.removeAttribute("open");
        }
      });

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleDetailsClick = (event) => {
    event.target.closest("details").removeAttribute("open");
  };

  return (
    <div className="navbar bg-base-100 px-10">
      <div className="navbar-start">
        <div className="dropdown" ref={dropdownRef}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={handleMobileMenuToggle}
          >
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

          {isMobileMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-72 p-2"
            >
              <li>
                <Link
                  href={"/"}
                  className="text-lg bg-white border-none font-semibold active:text-violet-600 btn active:border-violet-600 border-2"
                  onClick={handleMenuItemClick}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <details>
                  <summary className="text-lg bg-white active:text-violet-600 btn border-none pt-2">
                    Nosotros
                  </summary>
                  <ul className="p-2">
                    <li>
                      <Link
                        href={"/quienessomos"}
                        className="text-base bg-white active:text-violet-600 btn border-none"
                        onClick={handleMenuItemClick}
                      >
                        Quienes Somos
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/equipo"}
                        className="text-base bg-white active:text-violet-600 btn border-none"
                        onClick={handleMenuItemClick}
                      >
                        Equipo
                      </Link>
                    </li>
                  </ul>
                </details>
                <details>
                  <summary className="text-lg btn bg-white border-violet-600 border-2 pt-2 border-none">
                    Servicios
                  </summary>
                  <ul className="p-2">
                    <li>
                      <Link
                        href={"/servicios/1"}
                        className="text-base bg-white active:text-violet-600 btn border-none"
                        onClick={handleMenuItemClick}
                      >
                        Fotografía
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/servicios/2"}
                        className="text-base bg-white active:text-violet-600 btn border-none"
                        onClick={handleMenuItemClick}
                      >
                        Videoclip
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/servicios/3"}
                        className="text-base bg-white active:text-violet-600 btn border-none"
                        onClick={handleMenuItemClick}
                      >
                        Producción de eventos
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link
                  href={"/proyectos"}
                  className="text-lg bg-white active:text-violet-600 btn border-none"
                  onClick={handleMenuItemClick}
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href={"/galeria"}
                  className="text-lg bg-white active:text-violet-600 btn border-none"
                  onClick={handleMenuItemClick}
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  href={"/contacto"}
                  className="text-lg bg-white active:text-violet-600 btn border-none"
                  onClick={handleMenuItemClick}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          )}
        </div>

        <Link href={"/"} className="btn btn-ghost text-sm hidden md:grid">
          TRASHUMANTE
        </Link>
      </div>

      <div className="navbar-center hidden mx-4 lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="hover:text-violet-600">Nosotros</summary>
              <ul className="p-2 bg-white rounded-b-lg rounded-none">
                <li>
                  <Link
                    href={"/quienessomos"}
                    onClick={handleDetailsClick}
                    className="hover:text-violet-600"
                  >
                    ¿Quienes Somos?
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/equipo"}
                    onClick={handleDetailsClick}
                    className="hover:text-violet-600"
                  >
                    Equipo
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="hover:text-violet-600">Servicios</summary>
              <ul className="p-2 bg-white rounded-b-lg rounded-none">
                <li>
                  <Link
                    href={"/servicios/1"}
                    onClick={handleDetailsClick}
                    className="hover:text-violet-600"
                  >
                    Fotografía
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/servicios/2"}
                    onClick={handleDetailsClick}
                    className="hover:text-violet-600"
                  >
                    Videoclip
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/servicios/3"}
                    onClick={handleDetailsClick}
                    className="hover:text-violet-600"
                  >
                    Producción de Eventos
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"/proyectos"} className="hover:text-violet-600">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href={"/galeria"} className="hover:text-violet-600">
              Galería
            </Link>
          </li>
          <li>
            <Link href={"/contacto"} className="hover:text-violet-600">
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link
          href={"https://www.instagram.com/cineclub.aliciavega/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-8 h-8 bg-violet-200 rounded-full grid place-items-center mx-2 hover:border-violet-600 hover:border-2">
            <FaInstagram className="text-gray-700 text-xl" />
          </div>
        </Link>

        <Link href={""} target="_blank" rel="noopener noreferrer">
          <div className="w-8 h-8 bg-violet-200 rounded-full grid place-items-center mx-2 hover:border-violet-600 hover:border-2">
            <FaFacebook className="text-gray-700 text-xl" />
          </div>
        </Link>

        <Link href={""} target="_blank" rel="noopener noreferrer">
          <div className="w-8 h-8 bg-violet-200 rounded-full grid place-items-center mx-2 hover:border-violet-600 hover:border-2">
            <FaYoutube className="text-gray-700 text-xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;