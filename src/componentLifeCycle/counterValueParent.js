import React from 'react';
import ReactDOM from 'react-dom';

import CounterValue from "./counterValue";

class CounterValueParent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
                counterNumber:0
        };
        this.incrementCounter = this.incrementCounter.bind(this);
    }
    
    incrementCounter(){
        this.setState({counterNumber: this.state.counterNumber+1})
        //this.state.counterNumber = this.state.counterNumber+1;
        console.log(this.state.counterNumber);

    }

    render(){
        return(
            <div>
                <CounterValue displayCounter={this.state.counterNumber}> </CounterValue>

                <button onClick={this.incrementCounter}> + </button>
            </div>
        );
    }

    //component life cycle methods start
    componentWillMount(){
        console.log("component will mount: it is just about to mount");
    }

    componentDidMount(){
        console.log("component did mount: it just mounted")
    }

    componentDidUpdate(){
        console.log("component just updated")
    }

    componentWillUpdate(){
        console.log("component will be updated")
    }

    shouldComponentUpdate(myState, myProps){
        console.log("should component update. It will update till value is 8 then it will unmount.")
        if(this.state.counterNumber < 8){
            console.log("component should update till state is 8")
            return true;
        }else{
            ReactDOM.unmountComponentAtNode(document.getElementById('componentlifecycle'));
            console.log("component should not update now as state is equal to 8")
            return false;
        }
    }

    componentWillUnmount(){
        console.log("component is about to be removed from DOM")
    }


    //component life cycle methods end

}

export default CounterValueParent;