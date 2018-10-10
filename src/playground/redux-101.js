import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count = 101} = {}) =>({
    type: 'SET',
    count
});

const reset = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or actiton

const store = createStore((state = {count:0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return{
                count: state.count - action.decrementBy
            }
        case 'SET':
            return{
                count: action.count
            }
        case 'RESET':
            return{
                count: 0
            }
        default:
            return state;
    }
});

const unsubcribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// store.dispatch({
//     type: 'INCREMENT'
// })

// store.dispatch({
//     type: 'RESET'
// })
// store.dispatch({
//     type: 'SET',
//     count: 101
// });
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// })
store.dispatch(setCount({count: 101}));
store.dispatch(reset());

store.dispatch(decrementCount({decrementBy: 7}));
