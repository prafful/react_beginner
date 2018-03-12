import React from 'react';
import ReactDOM from 'react-dom';

import HelloReact from './HelloReact';

let position = document.getElementById('firstReactComponent');

ReactDOM.render(<HelloReact />, position);