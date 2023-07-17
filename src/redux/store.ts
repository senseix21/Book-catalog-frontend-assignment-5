import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import wishlistReducer from './features/wishlist/wishlistSlice';


const store = configureStore({
    reducer: {
        wishlist: wishlistReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;