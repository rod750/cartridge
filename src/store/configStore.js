import { createStore, combineReducers } from "redux";

export function configStore(initialState) {
    return createStore(combineReducers({}), initialState);
}
