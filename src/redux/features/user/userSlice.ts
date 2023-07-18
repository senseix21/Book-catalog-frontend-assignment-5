import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistConfig from "../../../utils/persistConfig";
import { clearPersist } from "../../../utils/helpers";

interface IUserState {
    userName: string;
    email: string;
    accessToken: string;
}

const initialState: IUserState = {
    userName: "",
    email: "",
    accessToken: "",
}

const userSlice = createSlice({
    name: 'setUser',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUserState>) => {
            return action.payload
        },
        clearUser: () => {
            localStorage.clear();
            clearPersist();
            return initialState;
        },

    }
})
const persistedUserSliceReducer = persistReducer(persistConfig, userSlice.reducer);

export const { setUser, clearUser } = userSlice.actions;
export default persistedUserSliceReducer;
