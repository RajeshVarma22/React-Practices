import React, { Fragment } from 'react';
import './App.css';
import Cart from './components/Cart';
import ShowCart from './components/ShowCart';

/*Normal function as function App(){..} , or Function expression as let App = function (){..}*/
let App = () => { 
  return (
    <Fragment> {/* else u have to write React.Fragment */}
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <a className='navbar-brand' href='/'>React with Services</a>
      </nav>
      {/* <Cart /> */}
      <ShowCart />
    </Fragment>
  );
}

export default App;
