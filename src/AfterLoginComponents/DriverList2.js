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
 
render(){ 
    return (
      <div className="jumbotron" style={{height:'100%'}}>
    
      <div className="container-fluid" >
             <br></br><br></br>
              <div className="row">
                   <div className="col-sm-3"  id="dashboard-side" >
                   <br></br>
                      <h2 id="comp_details" className="txt">Manage Job</h2>
                     
                      <hr></hr>
                         <h2 id="comp_details" className="txt">Created Job</h2>
                        
                          <hr></hr>
                        
                    </div>
  



                <div className="col-sm-9" style={{backgroundColor:'#e9ecef'}} >
           <div className="row">
               <div className="col-sm-12"  id="side2">


 <center>
                         <form className="col-md-12" id="driver-new" style={{marginTop:'100px;'}} >
                         <br></br> <br></br>
                           <h1 id="driv-list" ><b>Drivers List</b></h1>
                                    <br></br> <br></br> <br></br>
                                           <div className="col s2 m6" id="card3">
                                                      <div className="card " style={{backgroundColor:'white'}}>
                                                          <div class="row">
                                                              <div class="col-sm-6" >
                                                              <div className="col-sm-2">
                                                                 <img src={browser} style={{height:'90px',width:'90px',marginTop:'3px'}}/>
                                                              </div>
                                                               <div className="col-sm-5" id="d_name">
                                                               <p>DriverName <span class="glyphicon glyphicon-ok-sign" style={{color:'lightgreen'}}></span></p>
                                                              <p>City</p>
                                                              </div>
                                                             
                                                              </div>
                                                              <div class="col-sm-6" >
                                                               <div className="col-sm-12">
                                                                     <p style={{color:' #4EC2A4 '}}><b>Book|TimeSheets|Calender|Edit|Delete</b></p>
                                                                   </div>
                                                                    
                                                              </div>
                                                            </div>  
                                                         
                                                      </div>
                                                    </div>

                                              <div className="col s2 m6" id="card3">
                                                      <div className="card " style={{backgroundColor:'white'}}>
                                                          <div class="row">
                                                              <div class="col-sm-6" >
                                                              <div className="col-sm-2">
                                                                 <img src={browser} style={{height:'90px',width:'90px',marginTop:'3px'}}/>
                                                              </div>
                                                               <div className="col-sm-5" id="d_name">
                                                               <p>DriverName</p>
                                                              <p>City</p>
                                                              </div>
                                                             
                                                              </div>
                                                              <div class="col-sm-6" >
                                                                 
                                                                   <div className="col-sm-12">
                                                                     <p style={{color:' #4EC2A4 '}}><b>Book|TimeSheets|Calender|Edit|Delete</b></p>
                                                                   </div>
                                                                    
                                                              </div>
                                                            </div>  
                                                         
                                                      </div>
                                                    </div>
                                         </form>   

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
