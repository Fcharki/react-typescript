// todo : defining book type
export type Book = {
    id: number;
    title: string; 
    author: string; 
    genre: string ; 
    year: string;
}


// todo : defining state type
export type State = {
    books: Book [];
}

// todo : defining update type
export type Update = {
    id: number;
    updates: Book;
  }

// todo : defining delete type
  export type Delete = {
    id: number;
  }

// todo : defining action type
export type Action = {
    type: 'ADD_BOOK' | 'UPDATE_BOOK' | 'DELETE_BOOK';
    payload: Book | Update | Delete;
}
