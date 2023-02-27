import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import iceReducer from '../features/icecream/iceSlice';
import usersReducer from '../features/user/users';
import reduxLogger from 'redux-logger';

const logger = reduxLogger.createLogger;

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        ice: iceReducer,
        users: usersReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;