import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

export function Modal({ imgUrl, nombre, descripcion, url }) {
    return (<>
    
        <div className="col relative bg-slate-500 h-[222px] w-[318px] btn border-none"
        onClick={()=>document.getElementById('my_modal_2').showModal()}>
          <Image src={'/1.jpg'} alt="" layout="fill" className="object-cover"/>
        </div>

<dialog id="my_modal_2" className="modal border-none shadow-none">
  <div className="modal-box grid border-none shadow-none place-items-center max-h-4xl max-w-4xl rounded-none p-0">
  <Image src={'/1.jpg'} alt="" width={2000} height={2000}/>
    <Link href={'/equipo/bayronespinoza'} className='outline-none'>
  <div className='bg-white p-2 rounded-b-lg font-bold hover:text-violet-600'>
<h1>Isham Kamil</h1>
  </div>
    </Link>
  
  </div>
  <form method="dialog" className="modal-backdrop border-none">
    <button>close</button>
  </form>
</dialog>
    </>
    );
  }
  
  Modal.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };