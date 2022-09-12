const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numofIce: 10,
}

const iceSlice = createSlice({
    name: 'ice',
    initialState: initialState,
    reducers: {
        ordered: (state, action) => {
            state.numofIce -= action.payload;
        },
        restock: (state, action) => {
            state.numofIce += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numofIce--;
        })
    }
});

module.exports = iceSlice.reducer;
module.exports.iceActions = iceSlice.actions;