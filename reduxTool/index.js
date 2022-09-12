const store = require('./app/store');

const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iceActions = require('./features/icecream/iceSlice').iceActions;

console.log("initial state : ", store.getState());

const unsubscribe = store.subscribe(() => { });

store.dispatch(cakeActions.ordered(1))
store.dispatch(cakeActions.ordered(3))
store.dispatch(iceActions.ordered(1))
store.dispatch(iceActions.ordered(3))
store.dispatch(cakeActions.ordered(2))
store.dispatch(cakeActions.restock(10))

unsubscribe()