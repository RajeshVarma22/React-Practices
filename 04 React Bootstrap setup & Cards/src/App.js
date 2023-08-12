import React, { Fragment } from 'react';
import './App.css';
import Countrycard from './components/CountryCard';

let App = () => { {/*Normal function as function App(){..} , or Function expression as let App = function (){..}*/}
  return (
    <Fragment> {/* else u have to write React.Fragment */}
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <a className='navbar-brand' href='/'>React with Bootstrap Styles</a>
      </nav>
      <Countrycard />
    </Fragment>
  );
}

export default App;
