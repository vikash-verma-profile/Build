import { createStore, combineReducers } from 'redux';



// const counterReducerIncrement = (state = { counter: 0 }, action) => {
//     if (action.type === "increment") {
//         return {
//             counter: state.counter + action.amount,
//         };
//     }

//     // if (action.type === "decrement") {
//     //     return {
//     //         counter: state.counter - 1,
//     //     };
//     // }
//     return state;
// }


// const counterReducerDecrement = (state = { counter: 0 }, action) => {

//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//         };
//     }
//     return state;
// }

// const rootreducer=combineReducers({
//     increment:counterReducerIncrement,
//     decrement:counterReducerDecrement
// })

const intialState = { counter: 0, showCounter: true };
const counterReducer = (state = intialState, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        };
    }
    if (action.type === "increase") {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        };
    }
    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        };
    }

    if (action.type === "toggle") {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        };
    }
    return state;
}
const store = createStore(counterReducer);

export default store;