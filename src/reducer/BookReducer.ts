import { State } from "../lib/types";
import { Action, Book, Update } from "../lib/types";


export const BookReducer = (state : State, action : Action) : State => {
    switch(action.type) {
        case 'ADD_BOOK':
            return {
                ...state, 
                books: [...state.books, action.payload as Book]
            };

        case 'UPDATE_BOOK':
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