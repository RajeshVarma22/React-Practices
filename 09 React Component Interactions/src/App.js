import React, { Fragment } from 'react';
import './App.css';
import ParentComponent from './components/ParentComponent';

/*Normal function as function App(){..} , or Function expression as let App = function (){..}*/
let App = () => { 
  return (
    <Fragment> {/* else u have to write React.Fragment */}
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <a className='navbar-brand' href='/'>React with Component Interactions</a>
      </nav>
      <ParentComponent />
    </Fragment>
  );
}

export default App;
