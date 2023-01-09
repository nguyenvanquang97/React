import baseApi from './baseService'

export const userService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "/users"
        }),
        getUserById: builder.query({
            query: (id) => ({
                url: `/users/${id}`,
                method: "GET",
            })
        }),
        createUser: builder.mutation({
            query: (data) => ({
                url: "/users",
                method: "POST",
                body: data
            })
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
      
    })
})

export const { useGetUsersQuery, useCreateUserMutation ,useUpdateUserMutation,useDeleteUserMutation,useGetUserByIdQuery} = userService