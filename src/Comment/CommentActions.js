import React from 'react';
import ReactDOM from 'react-dom';


class CommentAction extends React.Component{
    editComment(){
        console.log("Editing the comment");
    }
    reviewComment(){
        console.log("Reviewing the comment");
    }
    likeComment(){
        console.log("Like the comment");
    }

    render(){
        return(
            <div>
               <button onClick={this.editComment}> Edit</button>
               <button onClick={this.reviewComment}> Review</button>
               <button onClick={this.likeComment}> Like</button>
            </div>
        );
    }

}

export default CommentAction;