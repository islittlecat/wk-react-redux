import React from "react";

const Context = React.createContext();

//改变store的值 会引起整个组件的更新;
export function connect(
    mapStateToProps = state=>state,
    mapDispatchToProps,
){
    return WrapperComponent => props => {
        const store = React.useContext(Context);
        let {getState, dispatch, subscribe} = store;
        let stateToProps = mapStateToProps(getState());
        let dispatchToProps = {
            dispatch
        };
        if(typeof mapDispatchToProps === 'object'){
            dispatchToProps = bindActionCreators(mapDispatchToProps, dispatch)
        }else if(typeof mapDispatchToProps === 'function') {
            dispatchToProps = mapDispatchToProps(dispatch)
        }


        const [ignored, froceUpdate] = React.useReducer(x => x + 1, 0);

        React.useLayoutEffect(()=>{
            const unsubscribe = subscribe(()=>{
                froceUpdate();
                console.log(froceUpdate)
            })
            return ()=>{
                if(unsubscribe){
                    unsubscribe();
                }
            }
        }, [store]);

        return <WrapperComponent {...props} {...stateToProps} {...dispatchToProps}/>
    }
}




export function Provider({store, children}){
    return <Context.Provider value={store}>{children}</Context.Provider>
}

function bindActionCreator(dispatch, creator){
    return (...args)=>dispatch(creator(...args));
}

export function bindActionCreators(creators, dispatch){
    let dispathObj = {};
    for(var k in creators){
        let creator = creators[k];
        dispathObj[k] = bindActionCreator(dispatch, creator)
    }
    return dispathObj;
}

export function useStore(){
    const store = React.useContext(Context);
    return store;
}

export function useSelector(selector){
    const store = useStore();
    const states = store.getState();
    let state = selector(states);
    let {subscribe} = store;
    const [ignored, froceUpdate] = React.useReducer(x => x + 1, 0);

    React.useLayoutEffect(()=>{
            const unsubscribe = subscribe(()=>{
                froceUpdate();
            })
            return ()=>{
                if(unsubscribe){
                    unsubscribe();
                }
            }
        }, [state]);

    return state;
}

export function useDispatch(){
    const store = useStore();
    const {dispatch} = store;
    return dispatch;
}