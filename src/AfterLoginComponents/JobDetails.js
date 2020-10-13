import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";

import '../App.css';
import Forarna from '../forarna.jpg';
import browse from '../1.jpg';
import browser from '../1.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'

class JobDetails extends React.Component {
   onNavigateHome() {
      this.props.history.push("/Job");
    }
    onNavigateHome2() {
      this.props.history.push("/JobDetails");
    }
    onNavigateHome3() {
      this.props.history.push("/ForarnaForDriver");
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
                         <h2 id="comp_details" className="txt"  onClick={this.onNavigateHome2.bind(this)} > Created Job</h2>
                        
                          <hr></hr>
                        
                    </div>
  



                <div className="col-sm-9" style={{backgroundColor:'#e9ecef'}} >
           <div className="row">
               <div className="col-sm-12"  id="jkdj">
   <form className="col-md-12" id="company_registration" style={{height:'700px'}}>
              <section>
                   <br></br> <br></br>
                        <div className="container">
                          <div className="row justify-content-center">
                               <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                                  <h1 id="forona_text" style={{fontSize:'30px'}}><b>Job Details</b></h1>
                                  <div className="col-sm-12">
                                          <p id="step">STEP 1  of 02</p>
                                          </div>
                                     <br></br> <br></br>
                                  <div className="row align-items-center">
                                       <div className="col">
                                          <input type="text" className="form-control" placeholder="Job Title" />
                                            </div>
                                            </div>
                                        <div className="row align-items-center mt-4">
                                              <div className="col">
                                               <input type="Number" className="form-control" placeholder="Address"/>
                                                 </div>
                                                <div className="col">
                                                   <input type="text" className="form-control" placeholder="City"/>
                                                 </div>
                                         </div>
                                      <div className="row align-items-center mt-4">
                                   <div className="col">
                            <input type="password" className="form-control" placeholder="Postal Code"/>
                                 </div>
                                    <div className="col">
                                       <input type="text" className="form-control" placeholder="Job Type"/>
                                       </div>
                                       </div>
                                  <div className="row align-items-center mt-4">
                                      <div className="col">
                                       <input type="password" className="form-control" placeholder="Starting Date"/>
                                         </div>
                                          <div className="col">
                                           <input type="password" className="form-control" placeholder="Ending Date"/>
                                      </div>
                                         </div>
                                           <div className="row align-items-center mt-4">
                                             <div className="col">
                                            <textarea type="text" className="form-control" >
                                            Job Description
                                                   </textarea>
                                          </div>
                                                       
                                        </div>
                                        <div className="row align-items-center mt-4">
                                      <div className="col">
                                       <input type="password" className="form-control" placeholder="Starting Salary"/>
                                         </div>
                                          <div className="col">
                                           <input type="password" className="form-control" placeholder="Ending Salary"/>
                                      </div>
                                         </div>
                 </div>
              </div>   
                  </div>
           </section>
        </form>



  <center>
     <div className="col-sm-12" id="company_registration">
     <br></br><br></br>
     <button type="button" className="btn btn-primary" id="register_submit" onClick={this.onNavigateHome3.bind(this)} >Next</button>
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





export default JobDetails;
