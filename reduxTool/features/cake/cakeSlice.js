const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numofCakes: 10,
}

// const cakeSlice = createSlice({
//     name:,
//     initialState:,
//     reducers: {
//         nameofAction:functions
//     }
// });

const cakeSlice = createSlice({
    name: "cake",
    initialState: initialState,
    reducers: {
        ordered: (state, action) => {
            state.numofCakes - action.payload;
        },
        restock: (state, action) => {
            state.numofCake + action.payload;
        }
    }
});

module.exports = cakeSlice.reducer