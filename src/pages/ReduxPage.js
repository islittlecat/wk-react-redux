import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

@connect(
    state => {
        return {
            count: state.count
        }
    },
    // dispatch => {
    //     let creators = {
    //         add: () => ({ type: "ADD", payload: 100 }),
    //         minus: () => ({ type: "MINUS", payload: 100 })
    //     };

    //     creators = bindActionCreators(creators, dispatch);

    //     return { dispatch, ...creators };
    // }
    {
        add: () => ({ type: "ADD", payload: 100 }),
        minus: () => ({ type: "MINUS", payload: 100 })
    }
)
class ReduxPage extends Component {

    render() {
        const { count, add, minus } = this.props;
        return (
            <div>{count}<button onClick={add}>100</button><button onClick={minus}>100</button></div>
        )
    }
}


export default ReduxPage;