import React from 'react';
import ReactDOM from 'react-dom';

import CommentAuthor from './CommentAuthor'
import CommentText  from "./CommentText";
import CommentActions from './CommentActions';

class Comment extends React.Component{
    render(){
        return(
            <div>
                <h3>Comment Component </h3>
                <div>
                    <CommentAuthor>Donald Trump</CommentAuthor>
                    <CommentText>This is the source of comment text and the source of happieness!!!</CommentText>
                    <CommentActions></CommentActions>
                </div>
                <div>
                    <CommentAuthor>Narendra Modi</CommentAuthor>
                    <CommentText>Good Primeminister</CommentText>
                    <CommentActions></CommentActions>
                </div>
                <div>
                    <CommentAuthor>Mani S</CommentAuthor>
                    <CommentText>Learning React!</CommentText>
                    <CommentActions></CommentActions>
                </div>
            </div>
        );
    }

}

export default Comment;