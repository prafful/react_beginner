import React from 'react';
import ReactDOM from 'react-dom';


class CommentText extends React.Component{
    render(){
        return(
            <div>
                <h5>Comment Text: {this.props.children} </h5>
            </div>
        );
    }

}

export default CommentText;