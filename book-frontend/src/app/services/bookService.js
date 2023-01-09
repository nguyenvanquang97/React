import baseApi from './baseService'

export const bookService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books"
        }),
        createBook: builder.mutation({
            query: (data) => ({
                url: "/books",
                method: "POST",
                body: data
            })
        }),
        updateBook: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `/books/${id}`,
                method: "PUT",
                body: data
            })
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE"
            }),
            transformResponse: (response, meta, arg) => {
                return arg
            }
        }),
    })
})

export const { useGetBooksQuery, useCreateBookMutation ,useUpdateBookMutation,useDeleteBookMutation} = bookService