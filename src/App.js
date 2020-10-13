import React from 'react';
import ReactDom from 'react-dom'
import logo from './logo.svg';
import './App.css';

import LoginNavbar from './AfterLoginComponents/LoginNavbar'
import Dashboard from './AfterLoginComponents/Dashboard'

import Job from './AfterLoginComponents/Job'
import BusinessDetails from './AfterLoginComponents/BusinessDetails'
import DriverList from './AfterLoginComponents/DriverList'
import JobDetails from './AfterLoginComponents/JobDetails'
import ForarnaForDriver from './AfterLoginComponents/ForarnaForDriver'
import DriverList2 from './AfterLoginComponents/DriverList2'
import {BrowserRouter,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
  <BrowserRouter>
     
    <LoginNavbar />
      
           <Route exact path="/Dashboard" component={Dashboard}  />
        <Route  path="/BusinessDetails" component={BusinessDetails}  />
           <Route  path="/Job" component={Job}  />
           <Route  path="/DriverList" component={DriverList}  />
           <Route  path="/JobDetails" component={JobDetails}  />
          
           <Route  path="/ForarnaForDriver" component={ForarnaForDriver}  />
           <Route  path="/DriverList2" component={DriverList2}  />
          
      </BrowserRouter>
    </div>
  );
}

export default App;
