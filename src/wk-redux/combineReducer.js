export default function combineReducer(combineReducers){
    return (states = {}, action)=>{
        let nextStates = {};
        let hasChanged = false;
        for(let k in combineReducers){
            let reducer = combineReducers[k];
            nextStates[k] = reducer(states[k], action);
            hasChanged = hasChanged || nextStates[k] !== states[k];
        }
        hasChanged = hasChanged || Object.keys(nextStates).length !== Object.keys(states).length;
        return  hasChanged ? nextStates : states;
    }
}