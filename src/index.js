import React from 'react';
import ReactDOM from 'react-dom';

import Comment from './Comment/Comment';
import HelloReact from './HelloReact';

let position = document.getElementById('firstReactComponent');

ReactDOM.render(
            <div>
                <HelloReact /> 
                <Comment> </Comment>
            </div>
            , position);