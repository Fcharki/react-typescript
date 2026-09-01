import { describe, it, expect } from 'vitest';
import { BookReducer } from './BookReducer';
import { State, Book } from '../lib/types';

const initialState: State = { books: [] };

const dune: Book = {
  id: 1,
  title: 'Dune',
  author: 'Frank Herbert',
  genre: 'Science Fiction',
  year: '1965',
};

describe('BookReducer', () => {
  it('adds a book on ADD_BOOK', () => {
    const result = BookReducer(initialState, { type: 'ADD_BOOK', payload: dune });
    expect(result.books).toHaveLength(1);
    expect(result.books[0]).toEqual(dune);
  });

  it('applies a partial update on UPDATE_BOOK', () => {
    const state: State = { books: [dune] };

    const result = BookReducer(state, {
      type: 'UPDATE_BOOK',
      payload: { id: 1, updates: { title: 'Dune Messiah' } },
    });

    // only the title should change, everything else stays the same
    expect(result.books[0]).toEqual({ ...dune, title: 'Dune Messiah' });
  });

  it('applies a full update on UPDATE_BOOK', () => {
    const state: State = { books: [dune] };
    const fullReplacement: Book = {
      id: 1,
      title: 'Dune Messiah',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
      year: '1969',
    };

    const result = BookReducer(state, {
      type: 'UPDATE_BOOK',
      payload: { id: 1, updates: fullReplacement },
    });

    expect(result.books[0]).toEqual(fullReplacement);
  });

  it('leaves other books untouched on UPDATE_BOOK', () => {
    const otherBook: Book = { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian', year: '1949' };
    const state: State = { books: [dune, otherBook] };

    const result = BookReducer(state, {
      type: 'UPDATE_BOOK',
      payload: { id: 1, updates: { year: '1990' } },
    });

    expect(result.books[1]).toEqual(otherBook);
  });

  it('deletes a book on DELETE_BOOK', () => {
    const state: State = { books: [dune] };
    const result = BookReducer(state, { type: 'DELETE_BOOK', payload: { id: 1 } });
    expect(result.books).toHaveLength(0);
  });

  it('returns state unchanged on unknown action', () => {
    // @ts-expect-error testing default case with an invalid action type
    const result = BookReducer(initialState, { type: 'UNKNOWN' });
    expect(result).toBe(initialState);
  });
});