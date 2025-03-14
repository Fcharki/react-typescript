import { FC } from "react";
import { Book, Action} from "../lib/types";
import { BookItem } from "./BookItem";
import { MdSettings } from "react-icons/md";

type BooksListProps = {
  books: Book[]; // Now only receives paginated books
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
};

export const BooksList: FC<BooksListProps> = ({ books, handleEdit, dispatch }) => {
  return (
    <div className="p-6 bg-gray-200 text-gray-800 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-amber-800 mb-4">List of Books</h3>
      <div className="overflow-x-auto rounded-md">
        <table className="w-full border border-gray-600">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-600 text-center italic">Title</th>
              <th className="px-4 py-2 border border-gray-600 text-center italic">Author</th>
              <th className="px-4 py-2 border border-gray-600 text-center italic">Genre</th>
              <th className="px-4 py-2 border border-gray-600 text-center italic">Year of Publication</th>
              <th className="px-4 py-2 border border-gray-600 text-center italic"><MdSettings size={20} className=""/></th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <BookItem key={book.id} {...book}  
                        handleEdit={handleEdit}
                        dispatch={dispatch}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
