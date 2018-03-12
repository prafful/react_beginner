import React from 'react';
import ReactDOM from 'react-dom';


class CommentAuthor extends React.Component{
    render(){
        return(
            <div>
                <h4>Author: {this.props.children} </h4>
            </div>
        );
    }

}

export default CommentAuthor;