import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryService = createApi({
  reducerPath: "categoryService",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/admin" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data,
      }),
    }),
    updateCategory: builder.mutation({
        query: ({ id, ...data }) => ({
            url: `/categories/${id}`,
            method: "PUT",
            body: data
        })
    }),
    deleteCategory: builder.mutation({
        query: (id) => ({
            url: `/categories/${id}`,
            method: "DELETE"
        }),
        transformResponse: (response, meta, arg) => {
            return arg
        }
    }),
  }),
});

export const { useGetCategoriesQuery, useCreateCategoryMutation ,useDeleteCategoryMutation,useUpdateCategoryMutation} =
  categoryService;
