const redux = require('redux');

// redux creating store
const createStore = redux.createStore;
// redux creating bindActionCreator
const bindActionCreators = redux.bindActionCreators;

// defualt initial State
const initialState = {
    cakes: 10,
    iceCream: 10,
};

// actions
// cake order
const orderCake = 'cake_ordered';
const restockCake = 'cake_restock';

// ice-cream
const orderCream = 'cream_ordered';
const restockCream = 'cream_restock';

// action funtions for cake
function order_cake(qty = 1) {
    return {
        type: orderCake,
        quantity: qty,
    }
}

function restock_cake(qty = 1) {
    return {
        type: restockCake,
        quantity: qty,
    }
}

// action funtions for IceCream
function order_cream(qty = 1) {
    return {
        type: orderCream,
        quantity: qty,
    }
}

function restock_cream(qty = 1) {
    return {
        type: restockCream,
        quantity: qty,
    }
}



// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case orderCake:
            return {
                ...state,
                cakes: state.cakes - action.payload,
            }
        case restockCake:
            return {
                ...state,
                cakes: state.cakes + action.payload,
            }
        case orderCream:
            return {
                ...state,
                cakes: state.iceCream - action.payload,
            }
        case restockCream:
            return {
                ...state,
                cakes: state.iceCream + action.payload,
            }
        default:
            return state
    }
}


// creating store
const store = createStore(reducer);
console.log('InitialState', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated State ', store.getState());
})

// creating action binders
const actions = bindActionCreators({ order_cake, restock_cream, order_cream, restock_cake }, store.dispatch);

// dispatching actions
actions.order_cake();
actions.order_cake(3);
actions.restock_cake(10 - store.getState().cakes);
actions.order_cream();
actions.order_cream(3);
actions.restock_cream(10 - store.getState().iceCream);