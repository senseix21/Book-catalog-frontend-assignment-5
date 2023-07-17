import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IBook {
    admin: string;
    author: string;
    cover_img: string;
    createdAt: string;
    genre: string;
    id: string;
    publicationYear: string;
    reviews: string[];
    title: string;
    updatedAt: string;
    __v: number;
    _id: string;
}


interface IWishlist {
    books: IBook[];
}

const initialState: IWishlist = {
    books: [],
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<IBook>) => {
            const existing = state.books.find(book => book._id == action.payload._id);
            if (!existing) {
                state.books.push({ ...action.payload })
            }
        },
        removeFromWishlist: (state, action: PayloadAction<IBook>) => {
            state.books = state.books.filter(book => book._id !== action.payload._id);
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;