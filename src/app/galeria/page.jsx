import Image from "next/image";
import Link from "next/link";

const Proyectos = () => {
  return (
    <main className="mx-12">
      <div className="px-5 text-center mt-16">
        <h1 className="text-5xl font-bold mb-16">Galería</h1>
      </div>

      <div className="grid grid-cols-4 gap-y-4 place-items-center">

        <div className="col bg-slate-500 h-[222px] w-[318px]">image</div>

        <div className="col bg-slate-500 h-[222px] w-[318px]">image</div>

        <div className="col bg-slate-500 h-[222px] w-[318px]">image</div>

        <div className="col bg-slate-500 h-[222px] w-[318px]">image</div>

        <div className="col bg-slate-500 h-[222px] w-[318px]">image</div>

        <div className="col bg-slate-500 h-[222px] w-[318px]">image</div>

        <div className="col bg-slate-500 h-[222px] w-[318px]">image</div>

        <div className="col bg-slate-500 h-[222px] w-[318px]">image</div>

      </div>

      <div className="h-28"></div>
    </main>
  );
};

export default Proyectos;
