import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter, Match } from 'react-router';

import './index.css';

import App from './components/App';

// const Root = () => {
//   return (
//     <BrowserRouter>
//       <Match exactly pattern="/" component={App} />
//     </BrowserRouter>
//   )
// }

render(<App />, document.querySelector('#root'))
