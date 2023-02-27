import { createSlice } from '@reduxjs/toolkit';
import { cakeActions } from '../cake/cakeSlice';

const initialState = {
    ice: 10,
}

const iceSlice = createSlice({
    name: 'ice',
    initialState,
    reducers: {
        ordered: (state, actions) => {
            state.ice -= actions.payload
        },
        restock: (state, actions) => {
            state.ice += actions.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.ice--;
        })
    }
});

export default iceSlice.reducer;
export const iceActions = iceSlice.actions;
