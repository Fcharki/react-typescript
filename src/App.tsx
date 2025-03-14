import "./App.css";
import { MdMenuBook } from "react-icons/md";
import { BooksForm } from "./components/BooksForm";
import { BooksList } from "./components/BooksList";
import { useReducer, useState } from "react";
import { BookReducer } from "./reducer/BookReducer";
import { State } from "./lib/types";
import ReactPaginate from "react-paginate";

const initialState: State = { books: [] };

function App() {
  // State Management
  const [state, dispatch] = useReducer(BookReducer, initialState);
  const toggleModal = () => {
    console.log("Modal toggled!");
    // Add modal handling logic here if needed
  };
  // Pagination State
  const booksPerPage = 3;
  const [bookOffset, setBookOffset] = useState(0);

  // Calculate Pagination Values
  const endOffset = bookOffset + booksPerPage;
  const currentItems = state.books.slice(bookOffset, endOffset);
  const pageCount = Math.ceil(state.books.length / booksPerPage);

  // Handle Page Change
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * booksPerPage) % state.books.length;
    setBookOffset(newOffset);
  };

  return (
    <>
      <div className="w-full max-w-6xl mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        {/* Title Section */}
        <div className="text-center mt-6 py-4 shadow-xs">
          <div className="flex items-center justify-center gap-3 ">
            <MdMenuBook className="text-green-900 text-5xl" />
            <h2 className="text-4xl font-bold text-amber-900 tracking-wide">
              Books Library
            </h2>
          </div>
          <div className="bg-amber-600 h-1 w-16 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2">
          {/* Left: Form Section */}
          <div className="p-8 flex flex-col items-center justify-center">
            <div className="bg-amber-100 p-10 w-full rounded-xl shadow-lg">
              <BooksForm dispatch={dispatch} toggleModal={toggleModal} />
            </div>
          </div>

          {/* Right Section */}
          <div className="p-8 flex flex-col justify-center">
            {state.books.length > 0 ? (
              <>
                <BooksList books={currentItems} />
                <div className="mt-6 flex justify-center">
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next >"
                    previousLabel="< Previous"
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName="flex space-x-2"
                    pageClassName="px-3 py-2 bg-gray-200 rounded-lg font-extrabold cursor-pointer"
                    activeClassName="bg-amber-600 text-white cursor-pointer"
                    previousClassName="px-3 py-2 text-white bg-amber-300 rounded-full border border-gray-300 cursor-pointer"
                    nextClassName="px-3 py-2 text-white bg-amber-300 rounded-full border border-gray-300 cursor-pointer"
                    disabledClassName="opacity-50 cursor-not-allowed"
                  />
                </div>
              </>
            ) : (
              <>
                <hr className="text-amber-600 rounded-lg" />
                <p className="text-gray-600 my-10 text-lg font-semibold text-center">
                  No books added yet.
                </p>
                <hr className="text-amber-600 rounded-lg" />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
