import React, { useState } from 'react';
import './AddCardModal.css'; // Dodajemy import CSS dla stylów
import { postOfferApi } from '../../Api/OffersService';

const Modal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>(''); // Stan do trzymania nazwy oferty

  // Funkcja otwierająca modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Funkcja zamykająca modal
  const closeModal = () => {
    setIsModalOpen(false);
    setName(''); // Resetowanie nazwy po zamknięciu
  };

  const handleAddOffer = async ()=>{
    if(name.trim()===''){
        alert('Please enter a valid name');
        return;
    }

    const newOffer={
        name:name
    };

    const response = await postOfferApi(newOffer);

    if(response){
        alert('Offer added successfully')
        setName('');
        closeModal();
        window.location.reload();
    }else{
        alert('Failed to add offer');
    }
  }

  return (
    <div>
      {/* Przycisk do otwierania modalu */}
      <h1 className="cursor-pointer h-10 border border-black bg-red-500 flex items-center justify-center bg-white w-auto px-5 my-5 rounded"onClick={openModal}>+</h1>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Offer</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter offer name"
            />
            <div>
              <h1 className="mb-3 text-center ml-3 cursor-pointer middle none center mr-4 border rounded-md border-black bg-white py-3 px-6 font-sans text-xs font-bold uppercase text-black shadow-md shadow-grey-500/20 transition-all hover:shadow-lg hover:shadow-grey-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={closeModal}>Cancel</h1>
              <h1 className="cursor-pointer text-center ml-3 middle none center mr-4 border rounded-md border-black bg-green-300 py-3 px-6 font-sans text-xs font-bold uppercase text-black shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={handleAddOffer}>
              Add Offer
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
