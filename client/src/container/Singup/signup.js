import React, { Component } from 'react';
import {Button, Jumbotron,Row,Col, Alert} from 'reactstrap';
import {connect} from 'react-redux';
import Auth from '../Authentication/authentication';

import *as actionCreator from '../../action/Auth/actionSingup';
import './signup.css';

export class signup extends Component {
    state={
        name:"",
        password:"",
        email:"",
        about:"",
        errorStatus:false,
        errorMessage:"",
        isBackError:false
    }
   changeHandler=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
   }
   handleSubmit=()=>{
       const {name,password,email,about}=this.state;
       if(!name||!password||!email||!about)
       {
           this.setState({
               errorStatus:true,
               errorMessage:"Fields can't be empty"
           })
       }else{
              if(password.length<6)
              {
                  return this.setState({
                    errorStatus:true,
                    errorMessage:"Password atleast should have 8 charcter"
                  })
              }  
              if(about.length<30)
              {
                 return this.setState({
                      errorStatus:true,
                      errorMessage:"About is too short"
                  })
              }
              const userData={
                name:this.state.name,
                password:this.state.password,
                email:this.state.email,
                about:this.state.about
            }
           
            this.props.onSignup(userData);
          
       }
   
   }
 
  clearErrorBack=()=>{
    this.setState({
        isBackError:true
    })
  }
 
  clearError=()=>{
      this.setState({
          errorStatus:false,
          errorMessage:""
      })
  }
    render() 
    {
      
        if(this.props.authState.isAuthenticated)
        {
            this.props.history.push('/');
        }
       
        return (
            <div>
            <div className="signupParentContainer">
                <Auth></Auth>
                <Jumbotron className="signupParentjumbo" style={{backgroundColor:"rgba(0,0,0,0.2)",padding:"0px"}}>
                     <Row>
                          <Col md="6" sm="12" xs="12">
                            
                             <form className="signupForm">
                                <h2>Create Your Account</h2>
                                <br></br>
                                {this.props.authState.error&&!this.state.isBackError?<Alert color="danger" >{this.props.authState.error.error}<p className="errorMessage" onClick={this.clearErrorBack}>close</p></Alert>:null}
                                {this.state.errorStatus?<Alert color="danger" >{this.state.errorMessage}<p className="errorMessage" onClick={this.clearError}>close</p></Alert>:null}
                                 <label>Username</label><br></br>
                                 <input type="text" name="name"placeholder="Enter Your name" onChange={this.changeHandler}required/>
                                 <label>Email</label><br></br>
                                 <input type="email" name="email" placeholder="Enter your email" onChange={this.changeHandler}required/>
                                 <label>Password</label><br></br>
                                 <input type="password" name="password" placeholder="Enter your password" onChange={this.changeHandler}required/>
                                 <label>About you</label><br></br>
                                 <textarea  placeholder="A bit about you and your profession" name="about" onChange={this.changeHandler}></textarea>
                             </form>
                             <div style={{margin:"10px 45px"}}>
                                 <Button  outline style={{backgroundColor:"#0BC6D5",border:"1px solid #0BC6D5",color:"white",padding:"5px 35px",boxShadow:"20px 20px 100px 10px rgba(0,0,0,0.5)",marginBottom:"10px"}} onClick={this.handleSubmit} id="submitbtn">Submit</Button>
                            
                             </div>
                             
                      </Col>
                          <Col md="6" sm="12" xs="12">
                          <div className="signupImage">
                             
                             
                          </div>
                          </Col>
                    </Row>
                  
                </Jumbotron>
            </div>
            <div className="signupParentContainerMob">
                <Jumbotron style={{backgroundColor:"#3f3f44",color:"#cceabb"}} >
                    <h6 style={{textDecoration:"underline",fontSize:"1.2em"}}>Welcome Onboard !</h6>
                   <small style={{color:"white",fontSize:"0.9em",opacity:"87%"}}>To get started we just need few details!</small>
                    <form className="signupFormMob">
                        <br></br>
                        {this.state.errorStatus?<Alert color="danger" >{this.state.errorMessage}<p className="errorMessage" onClick={this.clearError}><span><i class="far fa-window-close" style={{color:"#c02739",fontSize:"1em"}}></i></span></p></Alert>:null}
                    <input type="text" name="name" placeholder="Enter Your Username" onChange={this.changeHandler}/>
                    <input type="email" name="email" placeholder="Enter Your Email" onChange={this.changeHandler}/>
                    <input type="password" name="password" placeholder="Enter Your Password" onChange={this.changeHandler}/>
                    <textarea placeholder="A bit about you" name="about" onChange={this.changeHandler}></textarea>
                    </form>
                    <br></br>
                    <Button color="success" onClick={this.handleSubmit}>Submit</Button>
                    <br></br> <br></br>
                    <h6>Already have an account? <a href="/login" style={{color:"#FFAF5F"}}>Login</a></h6>
                </Jumbotron>
            </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
authState:state.auth
});
const mapDispatchToProps=dispatch=>{
    return{
        onSignup:(userData)=>dispatch(actionCreator.signupUserFunction(userData))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(signup)
 