import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogService = createApi({
    reducerPath: 'blogService',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/admin' }),
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => "/blogs"
        }),
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/blogs/${id}`,
                method: "DELETE"
            }),
            transformResponse: (response, meta, arg) => {
                return arg
            }
        }),
        createBlog: builder.mutation({
            query: (data) => ({
                url: "/blogs",
                method: "POST",
                body: data
            })
        }),
    })
})

export const { useGetBlogsQuery, useDeleteBlogMutation ,useCreateBlogMutation } = blogService