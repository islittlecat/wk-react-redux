//增强dispatch
export default function applyMiddleWare(...middleWares){
    return (createStore, reducer)=>{
        let store = createStore(reducer);
        let {getState, dispatch} = store;
        let mdiApi = {
            getState,
            dispatch: (...args)=>dispatch(...args)
        };

        let middleWareChine = middleWares.map(middleWare=>middleWare(mdiApi));
        dispatch = compose(...middleWareChine)(dispatch);
        return {
            ...store,
            dispatch
        }
    }
}


function compose(...func){
    if(func.length === 0){
        return args=>args;
    }
    if(func.length === 1){
        return func[0];
    }
    return func.reduce((a,b)=>(...args)=>a(b(...args)));
}