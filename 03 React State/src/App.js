import React, { Fragment } from 'react';
import './App.css';

let App = () => { {/*Normal function as function App(){..} , or Function expression as let App = function (){..}*/}
  return (
    <Fragment> {/* else u have to write React.Fragment */}
      <nav className='navbar'>
        <span>Welcome to App Components</span>
      </nav>
      
    </Fragment>
  );
}

export default App;
