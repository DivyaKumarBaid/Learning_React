import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cakes: 10,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state, actions) => {
            state.cakes -= actions.payload
        },
        restock: (state, actions) => {
            state.cakes += actions.payload
        }
    },
});

export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;
