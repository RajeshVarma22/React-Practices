import React, { Fragment } from 'react';
import './App.css';
import AddMulItemsCart from './component/AddMulItemsCart';
import AddProductCart from './component/AddProductCart';
import Counter from './component/Counter';
import ShoppingCart from './component/ShoppingCart';
import Tesing from './component/Testing';
import WishMessage from './component/WishMessage';

let App = () => { {/*Normal function as function App(){..} , or Function expression as let App = function (){..}*/}
  return (
    <Fragment> {/* else u have to write React.Fragment */}
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <a className='navbar-brand' href='/'>React with Event Handling</a>
      </nav>
      {/* <Counter /> */}
      {/* <WishMessage /> */}
      {/* <AddProductCart />   */}
      {/* <ShoppingCart /> */}
      {/* <AddMulItemsCart /> */}
      <Tesing />
    </Fragment>
  );
}

export default App;
