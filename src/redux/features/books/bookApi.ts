import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/books'
        }),
        getSingleBook: builder.query({
            query: (id) => `books/${id}`
        }),
        editBook: builder.mutation({
            query: ({ id, updatedData }) => ({
                url: `books/${id}`,
                method: 'PATCH',
                body: JSON.stringify(updatedData)
            }),
        })

    })
})

export const {
    useGetBooksQuery,
    useGetSingleBookQuery,
    useEditBookMutation
} = bookApi;

