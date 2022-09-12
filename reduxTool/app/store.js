const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice')
const iceReducer = require('../features/icecream/iceSlice')
const reduxLogger = require('redux-logger');
const { getDefaultMiddleware } = require('@reduxjs/toolkit');

const logger = reduxLogger.createLogger()
// configure store takes in an object as param having reducer as a key and the slices of reducer we want
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        ice: iceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store;