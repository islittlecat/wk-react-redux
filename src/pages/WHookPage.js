import { useCallback } from "react";
import { useDispatch, useSelector } from "../wk-react-redux/WkReactRedux"

export default function WHookPage(props){
    let count = useSelector(({count})=>count);
    let dispatch = useDispatch();
    let add = useCallback(()=>dispatch({type: 'ADD', payload: 100}))
    let minus = useCallback(()=>dispatch({type: 'MINUS', payload: 100}))
    return (
        <div>
            <p>{count}</p>
            <div>
                <button onClick={add}>add</button>
                <button onClick={minus}>miuns</button>
            </div>
        </div>
    )
}