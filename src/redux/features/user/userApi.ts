import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({

        loginUser: builder.mutation({
            query: (data) => ({
                url: `/users/create-user`,
                method: 'POST',
                body: data,
            }),
        })

    })
})



export const {
    useLoginUserMutation,
    endpoints: { loginUser }

} = bookApi;



