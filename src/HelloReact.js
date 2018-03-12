import React from 'react';
import ReactDOM from 'react-dom';


class HelloReact extends React.Component{
    

    render(){

        let alphabet = {
            color: this.props.frontColor,
            backgroundColor: this.props.backColor,
            float: "left",
            display: "block",
            padding:5,
            margin: 5

        };

        return(
            <div style={alphabet}>
                <h1>{this.props.children} </h1>
            </div>
        );
    }

}

export default HelloReact;