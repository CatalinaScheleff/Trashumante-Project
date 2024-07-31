import Image from "next/image";

const QuienesSomos = () => {
  return (
    <main className="pb-40">
      <div className="mx-8 lg:mx-20 mt-6 lg:mt-24">
        <div className=" grid md:grid-cols-2 col-auto">

          <div className="col lg:px-5 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">¿Quienes Somos?</h1>
            <p className="my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.
            </p>
            <p>
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.
            </p>
            <p>
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.
            </p>
            <p>
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.
            </p>
          </div>

          <div className="col grid xl:grid-cols-2 xl:grid-rows-6 h-[1000px] xl:h-[560px] md:mx-4 lg:mx-12 mt-8">
            <div className="col-span-1 row-span-5 bg-slate-600"> 
            <Image
              src={'/1.jpg'}
              alt=""
              width={650}
              height={560}
              className="w-full h-full object-cover"
            />
            </div>
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-5 bg-slate-600"> 
            <Image
              src={'/2.jpg'}
              alt=""
              width={650}
              height={560}
              className="w-full h-full object-cover"
            />
            </div>
            <div className="col-span-1 row-span-1"></div>
            
          </div>

        </div>
      </div>
    </main>
  );
};

export default QuienesSomos;


{/* <div className="hero">
        <div className="hero-content grid grid-cols-2 col-auto">

          <div className="col px-5">
            <h1 className="text-5xl font-bold mb-10">¿Quienes Somos?</h1>
            <p className="my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.
            </p>
            <p>
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.
            </p>
            <p>
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.
            </p>
          </div>

          <div className="col grid grid-cols-2 grid-rows-6 h-[560px]">
            <div className="col-span-1 row-span-5 bg-slate-600"> imagen</div>
            <div className="col-span-1 row-span-1"> col2</div>
            <div className="col-span-1 row-span-5 bg-slate-600"> imagen</div>
            <div className="col-span-1 row-span-1"> col1</div>
            
          </div>

        </div>
      </div> */}