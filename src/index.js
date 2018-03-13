import React from 'react';
import ReactDOM from 'react-dom';

import Comment from './Comment/Comment';
import HelloReact from './HelloReact';
import CounterValueParent from "./componentLifeCycle/counterValueParent";

import './css/hello.css';

let position = document.getElementById('firstReactComponent');

ReactDOM.render(
            <div >
                <HelloReact frontColor="red" backColor="pink"> H </HelloReact>
                <HelloReact  frontColor="pink" backColor="red" > e </HelloReact>
                <HelloReact  frontColor="black" backColor="grey"> l </HelloReact>
                <HelloReact  frontColor="orange" backColor="yellow"> l </HelloReact>
                <HelloReact  frontColor="blue" backColor="skyblue"> o </HelloReact>
                <HelloReact frontColor="red" backColor="pink"> M </HelloReact>
                <HelloReact frontColor="black" backColor="grey"> E </HelloReact>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Comment> </Comment>
                <br></br>
                
            </div>, 
            position);

ReactDOM.render(
                <div >
                    <CounterValueParent></CounterValueParent>
                </div>,
                document.getElementById('componentlifecycle'));