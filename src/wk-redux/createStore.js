

export default function createStore(reducer, enhancer){

    let currentState;
    let listens = [];

    if(enhancer){
        enhancer(createStore, reducer);
    }

    function getState(){
        return currentState;
    }


    function dispatch(action){
        currentState = reducer(currentState, action);
        console.log(currentState);
        listens.forEach(listen=>listen());
    }


    function subscribe(listen){
        listens.push(listen);
        console.log(listens);
        return ()=>{
            listens = listens.filter(item=>{
                return item !== listen;
            })
        }
    }

      // 手动执行以下dispatch，赋上初始值
    dispatch({type: "wwwKKKKKKKKREDUX/OOOOOOOOOO"});

    return {
        getState,
        dispatch,
        subscribe
    }

}