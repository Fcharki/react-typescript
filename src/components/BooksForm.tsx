import { FC, useState } from 'react';
import { Button,  Form } from 'react-bootstrap';
import { type Book } from '../lib/types';
import { Action } from '../lib/types';

type BookFormProps = { 
    dispatch: React.Dispatch<Action>;
    dataToEdit?: Book;
    toggleModal: () => void;
}
export const BooksForm: FC<BookFormProps> = ({ dispatch, dataToEdit, toggleModal }) => {
    const [book, setBook] = useState<Book>({
                                id: dataToEdit?.id ?? 0,
                                title: dataToEdit?.title ?? '',
                                author: dataToEdit?.author ?? '',
                                genre: dataToEdit?.genre ?? '',
                                year: dataToEdit?.year ?? '',
                            });


    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!dataToEdit) {
          dispatch({
            type: 'ADD_BOOK',
            payload: {
              id: Date.now(), // genearting a unique id each time a new book is added
              title: book.title,
              author: book.author,
              genre: book.genre,
              year: book.year,
            }
          });

          setBook({  //* clear form after submission
            id: 0, title: '', author: '', genre: '', year: ''
        });

        } else {
          // dispatch edit contact action
          dispatch({
            type: 'UPDATE_BOOK',
            payload: {
              id: dataToEdit.id,
              updates: {
                id: Date.now(),
                title: book.title,
                author: book.author,
                genre: book.genre,
                year: book.year,
              }
            }
          });
          toggleModal();
        }
      
      };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target;
        setBook({
            ...book,
            [name]: value
        });
    }

return (
    <Form onSubmit={handleOnSubmit} className='w-full'>
      <Form.Group controlId='title'>
        <Form.Label className='text-gray-600 font-medium italic'>Title</Form.Label>
        <Form.Control
          className='px-4 py-2 my-3 w-full placeholder:text-gray-500  placeholder:text-center  placeholder:text-md rounded-xl border-2 border-gray-400 focus:outline-none focus:border-amber-800'
          name='title'
          placeholder='Book title'
          value={book.title}
          type='text'
          onChange={handleOnChange}
          required
        />
      </Form.Group>
      <Form.Group controlId='author'>
        <Form.Label className='text-gray-600 font-medium italic'>Author</Form.Label>
        <Form.Control
          className='px-4 py-2 my-3 w-full placeholder:text-gray-500  placeholder:text-center  placeholder:text-md rounded-xl border-2 border-gray-400 focus:outline-none focus:border-amber-800'
          name='author'
          placeholder='Author name'
          value={book.author}
          type='text'
          onChange={handleOnChange}
          required
        />
      </Form.Group>
      <Form.Group controlId='genre'>
        <Form.Label className='text-gray-600 font-medium italic'>Genre</Form.Label>
        <Form.Control
          className='px-4 py-2 my-3 w-full placeholder:text-gray-500  placeholder:text-center  placeholder:text-md rounded-xl border-2 border-gray-400 focus:outline-none focus:border-amber-800'
          name='genre'
          placeholder="Book's genre"
          value={book.genre}
          type='text'
          onChange={handleOnChange}
          required
        />
      </Form.Group>
      <Form.Group controlId='year'>
        <Form.Label className='text-gray-600 font-medium italic'>Year</Form.Label>
        <Form.Control
          className='px-4 py-2 my-3 w-full placeholder:text-gray-500  placeholder:text-center  placeholder:text-md rounded-xl border-2 border-gray-400 focus:outline-none focus:border-amber-800'
          name='year'
          placeholder='Year of publication'
          value={book.year}
          type='text'
          onChange={handleOnChange}
          required
        />
      </Form.Group><hr className="my-6 text-gray-500 rounded-lg"/>
      <Form.Group controlId='submit'>
      <Button variant='primary' type='submit' className='submit-btn'>
        {dataToEdit ? 'Update Book' : 'Add Book'}
        </Button>
      </Form.Group>
    </Form>
  );

}