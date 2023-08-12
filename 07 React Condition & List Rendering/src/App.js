import React, { Fragment } from 'react';
import './App.css';
import ConditionalRendering from './components/ConditionalRendering';
import ListRenderingCart from './components/ListRenderingCart';

/*Normal function as function App(){..} , or Function expression as let App = function (){..}*/
let App = () => { 
  return (
    <Fragment> {/* else u have to write React.Fragment */}
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <a className='navbar-brand' href='/'>React with Condition & List Rendering</a>
      </nav>
      {/* <ConditionalRendering /> */}
      <ListRenderingCart />
    </Fragment>
  );
}

export default App;
