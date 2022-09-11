const configureStore = require('@reduxjs/toolkit').configureStore;

const cakeReducer = require('../features/cake/cakeSlice')

// configure store takes in an object as param having reducer as a key and the slices of reducer we want
const store = configureStore({
    reducer: {
        cake: cakeReducer,
    }
})

module.exports = store;