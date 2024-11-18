import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({
  // default rtk inbuilt function createAPi
  reducerPath: "userApiSlice", // this is the path (filename)
  baseQuery: fetchBaseQuery({
    //base url
    baseUrl: `https://672f876a66e42ceaf15dfcb2.mockapi.io/`,
  }),
  tagTypes: ["User"], //for tag caching purposes
  endpoints: (builder) => ({
    // endpoints
    // Get all users
    getUsers: builder.query({
      // when get query so use builder.query
      query: () => "crud", //this is endpoint
      providesTags: ["User"], //for caching purposes
    }),
    // Delete a user by ID
    DeleteUserByID: builder.mutation({
      //when delete update read so use builder.mutation
      query: (id) => ({
        url: `crud/${id}`, // this is endpoint by it getting delete
        method: "DELETE", // which type of method we use
      }),
      invalidatesTags: ["User"], //caching purpose
    }),
    // Add a User
    AddUser: builder.mutation({
      query: (newUser) => ({
        //
        url: "crud",
        method: "POST",
        body: newUser, //for in payload what can be passed
      }),
      invalidatesTags: ["User"],
    }),
    UpdateUser: builder.mutation({
      query: ({ id, ...updateUser }) => ({
        url: `crud/${id}`, //end point and update by id
        method: "PUT", //put update user
        body: updateUser, //updated data pass in payload
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUserByIDMutation,
  useAddUserMutation,
  useUpdateUserMutation,
} = userApiSlice;
