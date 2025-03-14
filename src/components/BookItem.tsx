import { FC } from 'react';
import { Book, Action } from '../lib/types';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

type ExtraProps =  {
    handleEdit: (id: number) => void;
    dispatch: React.Dispatch<Action>;
  }
export const BookItem: FC<Book & ExtraProps> = ({ id, title, author, genre, year, handleEdit, dispatch }) => {
  return (
    <tr className='bg-gray-200'>
    <td className="px-4 py-2 border border-gray-700">{title}</td>
    <td className="px-4 py-2 border border-gray-700">{author}</td>
    <td className="px-4 py-2 border border-gray-700">{genre}</td>
    <td className="px-4 py-2 border border-gray-700">{year}</td>
    <td className="px-4 py-2 border border-gray-700">
        <FaEdit size={25} className='icon text-amber-700' onClick={() => handleEdit(id)} />
        <RiDeleteBin6Fill size={25} className='icon text-green-700' onClick={() => {
            const confirmDelete = window.confirm(
              `Are you sure you want to delete book  ${title} of ${author}?`
            );
            if (confirmDelete) {
               dispatch({
                type: 'DELETE_BOOK',
                payload: { id }
              });
            }
          }}  />
        </td>
    </tr>
  );
};
