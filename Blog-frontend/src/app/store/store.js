import { configureStore } from "@reduxjs/toolkit";
import { authService } from "../services/authService";
import { blogService } from "../services/blogService";
import { categoryService } from "../services/categoryService";
import { userService } from "../services/userService";

import authReducer from "../slices/authSlice";
import blogReducer from "../slices/blogSlice";
import categoryReducer from "../slices/categorySlice";
import userReducer from "../slices/userSlice";


const store = configureStore({
    reducer: {
        [authService.reducerPath]: authService.reducer,
        [blogService.reducerPath]: blogService.reducer,
        [categoryService.reducerPath]: categoryService.reducer,
        [userService.reducerPath]: userService.reducer,
        auth: authReducer,
        blogs: blogReducer,
        categories: categoryReducer,
        users:userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authService.middleware,
            blogService.middleware,
            categoryService.middleware,
            userService.middleware,
        ),
});

export default store;
