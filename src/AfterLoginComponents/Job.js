import React,{Component} from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";

import '../App.css';
import Forarna from '../forarna.jpg';
import browse from '../1.jpg';
import browser from '../1.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'

class Dashboard extends Component {

    onNavigateHome() {
      this.props.history.push("/Job");
    }
    onNavigateHome2() {
      this.props.history.push("/JobDetails");
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
                             <center>
                                 <form className="col-md-12" id="dashboard-card" ><br></br><br></br>
                                    <div class="col-sm-4" >
                                         <form action="">
                                          <input type="text" className="form-control" placeholder="Job Title" name="search" id="search_dashboard"/>
                                          <i className="fa fa-search"></i>
                                        </form>
                                    </div>
                                   <br></br><br></br>
                                      <div className="col s2 m6" id="new-card-dashboard">
                                              <div className="card " style={{backgroundColor:'white'}}>
                                                <div class="row">
                                                  <div class="col-sm-6" >

                                                     <p>Job Title</p>
                                                       <p>Company Name   4.8<span class="glyphicon glyphicon-star" ></span></p>
                                                          <p>Address</p>
                                                            <br></br>
                                                             <p>-First line of detail</p>
                                                              <p>-Second line of detail</p>
                                                               <br></br>
                                                               <p><span class="glyphicon glyphicon-user" ></span>15 people have applied | Assign a Driver</p>
                                                              </div>
                                                              <div class="col-sm-6" >
                                                              <img src={browse} style={{width:'90px',height:'70px',borderRadius:'10px',marginTop:'10px'}} />
                                                                 <p>Permenant</p>
                                                                 <p>City Name</p>
                                                                  <p><span class="glyphicon glyphicon-calendar" ></span>Start Date</p>
                                                                   <p><span class="glyphicon glyphicon-calendar" ></span>End Date</p>
                                                                    <h3>Edit  | Delete </h3>
                                                              </div>
                                                            </div>  
                                                         
                                                      </div>
                                                    </div>



                                             <div className="col s2 m6"  id="dashboard-acrd-second">
                                              <div className="card " style={{backgroundColor:'white'}}>
                                                <div class="row">
                                                  <div class="col-sm-6" >

                                                     <p>Job Title</p>
                                                       <p>Company Name   4.8<span class="glyphicon glyphicon-star" ></span></p>
                                                          <p>Address</p>
                                                            <br></br>
                                                             <p>-First line of detail</p>
                                                              <p>-Second line of detail</p>
                                                               <br></br>
                                                               <p><span class="glyphicon glyphicon-user" ></span>15 people have applied | Assign a Driver </p>
                                                              </div>
                                                              <div class="col-sm-6" >
                                                              <img src={browse} style={{width:'90px',height:'70px',borderRadius:'10px',marginTop:'10px'}} />
                                                                 <p>Permenant</p>
                                                                 <p>City Name</p>
                                                                  <p><span class="glyphicon glyphicon-calendar" ></span>Start Date</p>
                                                                   <p><span class="glyphicon glyphicon-calendar" ></span>End Date</p>
                                                                   <h3>Edit  | Delete </h3>
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





export default Dashboard;
