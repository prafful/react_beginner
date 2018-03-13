import React from 'react';
import ReactDOM from 'react-dom';


class CounterValue extends React.Component{

    render(){
        return(
               <div>
                  {this.props.displayCounter} 
               </div>
            );
    }


}

export default CounterValue;