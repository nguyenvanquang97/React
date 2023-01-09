import { createSlice } from '@reduxjs/toolkit';
import { bookService } from '../services/bookService';

const initialState = {
    books: []
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(bookService.endpoints.getBooks.matchFulfilled, (state, action) => {
            state.books = action.payload;
        })
        builder.addMatcher(bookService.endpoints.createBook.matchFulfilled, (state, action) => {
            state.books.push(action.payload);
        })
        builder.addMatcher(bookService.endpoints.updateBook.matchFulfilled, (state, action) => {
            let index = state.books.findIndex(categoory => categoory.id === action.payload.id);
            state.books[index] = action.payload
        })
        builder.addMatcher(bookService.endpoints.deleteBook.matchFulfilled, (state, action) => {
            let index = state.books.findIndex(book => book.id === action.payload);
            state.books.splice(index, 1);
        })
    }
});

export const { } = bookSlice.actions

export default bookSlice.reducer