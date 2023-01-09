import { configureStore } from "@reduxjs/toolkit";
import { authService } from "../services/authSevice";
import baseApi from "../services/baseService";
import authReducer from "../slices/authSlice";
import { categoryService } from "../services/categoryService";
import categoryReducer from "../slices/categorySlice";
import authorReducer from "../slices/authorSlice";
import { authorService } from "../services/authorSevice";
import { userService } from "../services/userSevice";
import userReducer from "../slices/userSlice";
import { bookService } from "../services/bookService";
import bookReducer from "../slices/bookSlice";

const store = configureStore({
    reducer: {
        [authService.reducerPath]: authService.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
        [categoryService.reducerPath]: categoryService.reducer,
        [authorService.reducerPath]:authorService.reducer,
        [userService.reducerPath]:userService.reducer,
        [bookService.reducerPath]:bookService.reducer,
        auth: authReducer,
        categories: categoryReducer,
        authors:authorReducer,
        users:userReducer,
        books:bookReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authService.middleware,
            baseApi.middleware,
            categoryService.middleware,
            authorService.middleware,
            userService.middleware,
            bookService.middleware,
        ),
});

export default store;