import React from 'react';
import ReactDOM from 'react-dom';


class CommentAction extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Manoj Khanna",
            counter: 0
            }
           
        this.editComment = this.editComment.bind(this);    


    }
    editComment(){
        this.state.counter = this.state.counter + 1;;
        this.setState({counter: this.state.counter});
        console.log("Editing the comment"  + this.state.counter + "times!!!");
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