import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userService = createApi({
  reducerPath: "userService",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/admin" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
        query: ({ id, ...data }) => ({
            url: `/users/${id}`,
            method: "PUT",
            body: data
        })
    }),
    deleteUser: builder.mutation({
        query: (id) => ({
            url: `/users/${id}`,
            method: "DELETE"
        }),
        transformResponse: (response, meta, arg) => {
            return arg
        }
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation ,useDeleteUserMutation,useUpdateUserMutation} =
  userService;
