import { createStore, combineReducer } from "../wk-redux/index";
import { accumulation } from "./reducers";


const store = createStore(combineReducer({
    count: accumulation
}))
console.log(store.getState())

export default store;