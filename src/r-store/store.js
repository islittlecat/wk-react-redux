import { createStore, combineReducers } from "redux";
import { accumulation } from "./reducers";

const store = createStore(combineReducers({
    count: accumulation
}))


export default store;