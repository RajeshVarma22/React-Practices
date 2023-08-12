import React, { Fragment } from 'react';
import './App.css';
import Employee from './components/Employee';
import StudentPropFun from './components/StudentPropsFun';

let App = () => { {/*Normal function as function App(){..} , or Function expression as let App = function (){..}*/}
  return (
    <Fragment> {/* else u have to write React.Fragment */}
      <nav className='navbar'>
        <span>Welcome to App Components</span>
      </nav>
      {/* <Employee name = "Rajesh" age = {22}/>
      <Employee age = {21} name = "Gireesh" /> */}
      <StudentPropFun name= "Rajesh" course ="B.Tech" village = "Gorantla"/>
      <StudentPropFun name= "Gireesh" course ="DEGREE" village = "Gorantla"/>
    </Fragment>
  );
}

export default App;
