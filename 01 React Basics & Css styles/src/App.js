import React, { Fragment } from 'react';
import './App.css';
import  Card  from "./components/Card";
import CardWithClass from './components/CardWithClass';

let App = () => { {/*Normal function as function App(){..} , or Function expression as let App = function (){..}*/}
  return (
    <Fragment> {/* else u have to write React.Fragment */}
      <nav className='navbar'>
        <span>Welcome to the function</span>
      </nav>
      <Card />
      <CardWithClass />
    </Fragment>
  );
}

export default App;
