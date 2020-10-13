import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";

import '../App.css';
import Forarna from '../forarna.jpg';
import browse from '../1.jpg';
import browser from '../1.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'

class BusinessDetails extends React.Component {
 
render(){ 
    return (
      <div className="jumbotron" style={{height:'100%'}}>
     <div className="container-fluid" >
             <br></br><br></br>
              <div className="row">
                   <div className="col-sm-3"  id="dashboard-side" >
                   <br></br>
                   <h2 className="txt">Add Business</h2>
                       <hr></hr>
                      <h2 className="txt">Manage Business</h2>
                         <hr></hr>
                        
                    </div>
  



                <div className="col-sm-9" style={{backgroundColor:'#e9ecef'}} >
           <div className="row">
               <div className="col-sm-12"  id="side2">
                             <center>
                                 <form className="col-md-12" id="business-dashboard" ><br></br><br></br>
                                  <h2 id="forona_text" ><b>Business Details</b></h2>
                                     <br></br><br></br><br></br><br></br><br></br>
                                       <button type="button" class="btn btn-primary" id="browse">Browse</button>
                                      
                                       <br></br> <br></br>
                                          <section>
                                            <div className="container">
                                              <div className="row justify-content-center">
                                                <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                                                 
                                                          <div className="row align-items-center">
                                                                  <div className="col">
                                                                    <input type="text" className="form-control" placeholder="First Name" />
                                                                  </div>
                                                                  <div className="col">
                                                                    <input type="text" className="form-control" placeholder="Last Name"/>
                                                                  </div>
                                                          </div>
                                                          <div className="row align-items-center mt-4">
                                                             <div className="col">
                                                                    <input type="Number" className="form-control" placeholder="Phone Number"/>
                                                                  </div>
                                                                  <div className="col">
                                                                    <input type="Email" className="form-control" placeholder="Email"/>
                                                                  </div>
                                                          </div>
                                                    <div className="row align-items-center mt-4">
                                                      <div className="col">
                                                        <input type="password" className="form-control" placeholder="Password"/>
                                                      </div>
                                                      <div className="col">
                                                        <input type="password" className="form-control" placeholder="Confirm Password"/>
                                                      </div>
                                                    </div>
                                                     <br></br><br></br><br></br>
                                                </div>
                                              </div>   
                                            </div>
                                          </section>
                                         </form>




                         </center>
                  </div>
</div>

   <center>
     <div className="col-sm-12" id="business-footer" >
     <br></br><br></br>
     <button type="button" className="btn btn-primary" id="register_submit" >Add</button>
     <br></br><br></br>
 <br></br><br></br><br></br>
     </div>

     </center>

    
       












</div>



              </div>
      </div>






      







 </div>

    );

}
}





export default BusinessDetails;
