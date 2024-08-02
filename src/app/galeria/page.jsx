import { Modal } from "@/components/Modal";
import { info } from "../../data/index";

const Galeria = () => {
  return (
    <main className="md:mx-12 pb-20 md:pb-4">
      <div className="px-5 text-center mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16">Galería</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 place-items-center">
        {info?.galeria?.map((img, index) => (
          <Modal key={index} {...img} modalId={`modal_${img.id}`} />
        ))}
      </div>

      <div className="h-28"></div>
    </main>
  );
};

export default Galeria;
