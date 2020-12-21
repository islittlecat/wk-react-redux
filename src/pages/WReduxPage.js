import { Component } from "react";
import { connect } from "../wk-react-redux/WkReactRedux";
// import store from "../w-store/store";

@connect(
    state => {
        return {
            count : state.count
        };
    },
    dispatch => {
        return {
            'add': ()=>{dispatch({type: 'ADD', payload: 100})},
            'minus': ()=>dispatch({type: 'MINUS', payload: 100})
        }
    }
)
class WReduxPage extends Component{

    constructor(props){
        super(props)
        console.log(props);
    }

    render(){
        let { count, add, minus } = this.props;

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
}

export default WReduxPage;