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

// todo : defining action type
export type Action = {
    type: 'ADD_BOOK';
    payload: Book;
}
