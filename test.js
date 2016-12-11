import { createStore } from 'redux';

// This is a reducer
function rating(state = 0, action) {
    switch (action.type) {
        case 'LIKE':
            return state + 1;
        case 'DISLIKE':
            return state - 1;
        default:
            return state;
    }
}

// This is an action creator
function ratingUp() {
    return {
        type: 'LIKE'
    };
}
function ratingDown() {
    return {
        type: 'DISLIKE'
    };
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(rating);

// You can use subscribe() to update the UI in response to state changes.
store.subscribe(() => {
    console.log(store.getState());
});

// The only way to mutate the internal state is to dispatch an action.
store.dispatch(ratingUp());
store.dispatch(ratingDown());
store.dispatch(ratingUp());