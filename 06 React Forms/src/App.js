import React, { Fragment } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/Registrationform';
import Testing from './components/Testing';
import UserNameDataBinding from './components/UserNameDataBinding';


let App = () => { {/*Normal function as function App(){..} , or Function expression as let App = function (){..}*/}
  return (
    <Fragment> {/* else u have to write React.Fragment */}
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <a className='navbar-brand' href='/'>React with Event Handling</a>
      </nav>
      <UserNameDataBinding />
      <LoginForm />
      <RegistrationForm />
      <Testing />
    </Fragment>
  );
}

export default App;
