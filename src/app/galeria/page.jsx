import { Modal } from "@/components/Modal";
import { info } from "../../data/index";

const Galeria = () => {
  return (
    <main className="mx-12">
      <div className="px-5 text-center mt-16">
        <h1 className="text-5xl font-bold mb-16">Galería</h1>
      </div>

      <div className="grid grid-cols-4 gap-y-4 place-items-center">
        {info?.galeria?.map((img, index) => (
          <Modal key={index} {...img} modalId={`modal_${img.id}`} />
        ))}
      </div>

      <div className="h-28"></div>
    </main>
  );
};

export default Galeria;
