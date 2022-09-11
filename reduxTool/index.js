const store = require('./app/store');

const cakeActions = require('./features/cake/cakeSlice').cakeActions;

console.log("initial state : ", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("updated state : ", store.getState())
});

store.dispatch(cakeActions.ordered(1))
store.dispatch(cakeActions.ordered(3))
store.dispatch(cakeActions.ordered(2))
store.dispatch(cakeActions.restock(10))

unsubscribe()