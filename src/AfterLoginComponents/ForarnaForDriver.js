import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";

import '../App.css';
import Forarna from '../forarna.jpg';
import browse from '../1.jpg';
import browser from '../1.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'

class ForarnaForDriver extends React.Component {
  onNavigateHome() {
    this.props.history.push("/Job");
  }
  onNavigateHome2() {
    this.props.history.push("/JobDetails");
  }
  onNavigateHome5() {
    this.props.history.push("/DriverList");
  }
render(){ 
    return (
      <div className="jumbotron" style={{height:'100%'}}>
    
      <div className="container-fluid" >
             <br></br><br></br>
              <div className="row">
                   <div className="col-sm-3"  id="dashboard-side" >
                   <br></br>
                      <h2 id="comp_details" className="txt" onClick={this.onNavigateHome.bind(this)}>Manage Job</h2>
                     
                      <hr></hr>
                         <h2 id="comp_details" className="txt" onClick={this.onNavigateHome2.bind(this)}>Created Job</h2>
                        
                          <hr></hr>
                        
                    </div>
  



                <div className="col-sm-9" style={{backgroundColor:'#e9ecef'}} >
           <div className="row">
               <div className="col-sm-12"  id="side2">
 
 <form className="col-md-12" id="company_registration" style={{height:'650px'}}>
              <section>
                   <br></br> <br></br>
                        <div className="container">
                          <div className="row justify-content-center">
                               <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                                 
                                       <div className="col-md-12" id="frona-white">
                                            <div className="col-sm-12">
                                             <center> <h3 >Driver Registration</h3></center>
                                            </div>
                                              
                                         <div className="col-sm-12">
                                              <center><h2 style={{fontSize:'35px'}}>Forarna For Driver</h2></center>
                                            </div>
                                             <div className="col-sm-12">
                                               <p id="step" style={{fontSize:'12px',textAlign:'center'}}>STEP 1 of 02</p>
                                            </div>
                                            </div>
                                       <center>
                                       <div className="dropdown multiselect" id="edu_jobs" >
                                              <button className="btn btn-default dropdown-toggle"  type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                               Education
                                              </button>
                                              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1" id="qw">
                                              <li><a>
                                                <input type="checkbox" id="action1" />
                                                <label for="action1">Urdu</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action1"/>
                                                <label for="action2">English</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action1"/>
                                                <label for="action3">Action</label>
                                              </a></li>
                                              </ul>
                                        </div>

                                        <div className="dropdown multiselect" id="Education_job" >
                                              <button className="btn btn-default dropdown-toggle"  type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                               Level of experience
                                              </button>
                                              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1" id="qw">
                                              <li><a>
                                                <input type="checkbox" id="action1" />
                                                <label for="action1">Urdu</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action2"/>
                                                <label for="action2">English</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action3"/>
                                                <label for="action3">Action</label>
                                              </a></li>
                                              </ul>
                                        </div>

                                         <div className="dropdown multiselect" id="Education_job" >
                                              <button className="btn btn-default dropdown-toggle"  type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                              List of experience
                                              </button>
                                              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1" id="qw">
                                              <li><a>
                                                <input type="checkbox" id="action1" />
                                                <label for="action1">Urdu</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action2"/>
                                                <label for="action2">English</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action3"/>
                                                <label for="action3">Action</label>
                                              </a></li>
                                              </ul>
                                        </div>


                                         <div className="dropdown multiselect" id="Education_job" >
                                              <button className="btn btn-default dropdown-toggle"  type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                               Language
                                              </button>
                                              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1" id="qw">
                                              <li><a>
                                                <input type="checkbox" id="action1" />
                                                <label for="action1">Urdu</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action2"/>
                                                <label for="action2">English</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action3"/>
                                                <label for="action3">Action</label>
                                              </a></li>
                                              </ul>
                                        </div>
                                         <div className="dropdown multiselect" id="Education_job" >
                                              <button className="btn btn-default dropdown-toggle"  type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                               Basic Ads(500)
                                              </button>
                                              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1" id="qw">
                                              <li><a>
                                                <input type="checkbox" id="action1" />
                                                <label for="action1">Urdu</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action2"/>
                                                <label for="action2">English</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action3"/>
                                                <label for="action3">Action</label>
                                              </a></li>
                                              </ul>
                                        </div>
                                     </center>

                               </div>
                          </div>   
                        </div>
               </section>
         </form>


  <center>
     <div className="col-sm-12" id="company_registration">
     <br></br><br></br>
     <button type="button" className="btn btn-primary" id="register_submit" onClick={this.onNavigateHome5.bind(this)}>Publish</button>
     <br></br><br></br>
 <br></br><br></br><br></br>
     </div>

     </center>


                  </div>
</div>
</div>




    
        

   




              </div>
      </div>






      







 </div>

    );

}
}





export default ForarnaForDriver;
