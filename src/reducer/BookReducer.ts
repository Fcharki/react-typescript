import { State } from "../lib/types";
import { Action, Book, Update } from "../lib/types";


export const BookReducer = (state : State, action : Action) : State => {
    switch(action.type) {
        case 'ADD_BOOK':
            return {
                ...state, // todo : this copies all existing properties from the state object into a new object.
                books: [
                    ...state.books, // todo: Copies all the existing books into a new array.
                    action.payload as Book] // todo: Adds the new book to that array.
            };

        case 'UPDATE_BOOK':
        {  
            const { id, updates } = action.payload as Update;
            return {
                ...state,
                books: state.books.map((book) => {
                if (book.id === id) {
                    return {
                    ...book,
                    ...updates
                    };
                }
                return book;
                })
            };
        }

            case 'DELETE_BOOK': {
                const { id } = action.payload;
                return {
                  ...state,
                  books: state.books.filter((book) => book.id !== id)
                };
              }

        default :
            return state;
    }
}