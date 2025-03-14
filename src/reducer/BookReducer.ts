import { State } from "../lib/types";
import { Action } from "../lib/types";


export const BookReducer = (state : State, action : Action) : State => {
    switch(action.type) {
        case 'ADD_BOOK':
            return {
                ...state, 
                books: [...state.books, action.payload]
            };
        default :
            return state;
    }
}