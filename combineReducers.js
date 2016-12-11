import { combineReducers } from 'redux';

function ratingReducer(state = 0, action) {
    // как то вычисляет nextState...
    return nextState
}

function counterReducer(state = 0, action) {
    // как то вычисляет nextState...
    return nextState
}

const appReducer = combineReducers({
    rating: ratingReducer,
    count: counterReducer
});