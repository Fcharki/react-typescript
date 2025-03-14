import { FC } from 'react';
import { Book } from '../lib/types';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

export const BookItem: FC<Book> = ({ title, author, genre, year }) => {
  return (
    <tr className='bg-gray-200'>
    <td className="px-4 py-2 border border-gray-700">{title}</td>
    <td className="px-4 py-2 border border-gray-700">{author}</td>
    <td className="px-4 py-2 border border-gray-700">{genre}</td>
    <td className="px-4 py-2 border border-gray-700">{year}</td>
    <td className="px-4 py-2 border border-gray-700">
        <AiFillEdit size={25} className='icon text-amber-700' />
        <AiFillDelete size={25} className='icon text-green-700' />
        </td>
    </tr>
  );
};
