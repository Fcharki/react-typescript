import { FC } from 'react';
import { Action, Book } from '../lib/types';
import { BooksForm } from './BooksForm';
import { IoIosCloseCircle } from "react-icons/io";

type EditModalProps = {
  showModal: boolean;
  dataToEdit: Book | undefined;
  toggleModal: () => void;
  dispatch: React.Dispatch<Action>;
}

export const EditModal: FC<EditModalProps> = ({
  toggleModal,
  dataToEdit,
  showModal,
  dispatch
}) => {
  if (!showModal) return null;
  
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50  md:flex md:justify-center md:items-center  sm:flex sm:justify-center sm:items-center">
      <div className="relative top-20 mx-auto p-5 border w-100 shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-xl font-semibold text-amber-900">Update Book</h3>
          <button 
            onClick={toggleModal}
            className="text-gray-600 hover:text-gray-700"
          >
         <IoIosCloseCircle size={20}/>
          </button>
        </div>
        <div className="mt-4 bg-amber-100 p-4 rounded-md">
          <BooksForm
            dispatch={dispatch}
            dataToEdit={dataToEdit}
            toggleModal={toggleModal}
          />
        </div>
      </div>
    </div>
  );
};