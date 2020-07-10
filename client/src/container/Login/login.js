import React, { Component } from 'react'
import './login.css';
import {connect} from 'react-redux';
import {loginUserFunction} from '../../action/Auth/actionSingup';

import { Button, Alert } from 'reactstrap';

export class login extends Component {
    state={
        emailValidate:true,
        email:"",
        password:"",
        errorStatus:false,
        errorMessage:"",
        isBackError:false
    }
   
    onKeyUpHandler=(e)=>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
        {
           this.setState({
               emailValidate:true
           })
            
        }else{
            this.setState({
                emailValidate:false
            })
        }
        
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
       
        e.preventDefault();
        if(!this.state.password||!this.state.email)
        {
            this.setState({
                errorStatus:true,
                errorMessage:"Fields can't be empty"
            })
        }else{
        const userLoginDetails={
            email:this.state.email,
            password:this.state.password
        }
        this.setState({
            isBackError:false
        })
        this.props.onLogin(userLoginDetails);
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
    render() { 
        if(this.props.authState.isAuthenticated)
        {
            this.props.history.push('/');
        }
        return (
            <div>
            <div className="parentModel" >
                <nav>
                    <a href="/signup">Signup <span>&#8594;</span></a>
                </nav>
                <div className="loginModel" style={{marginTop:"0px"}}>
                {this.props.authState.error&&!this.state.isBackError?<Alert color="danger" >{this.props.authState.error.error}<p className="errorMessage" onClick={this.clearErrorBack}>close</p></Alert>:null}
                {this.state.errorStatus?<Alert color="danger" >{this.state.errorMessage}<p className="errorMessage" onClick={this.clearError}>close</p></Alert>:null}
                    <h1>Here you can login</h1>
                    <p style={{color:"#5D5F5C"}}>Lets's join us :)</p>
                    <form className="loginform"> 
                        
                        <label name="Email">Email</label>
                        <br></br>
                        <input type="email" name="email" onBlur={this.onKeyUpHandler} onChange={this.changeHandler}></input>
                       {this.state.emailValidate?null:<div><label  id="errorMessage">Mail address seems incorrect</label></div>} 
                        <label name="Password" >Password</label>
                        <br></br>
                        <input type="password"  name="password"onChange={this.changeHandler}></input>
                        <br></br><br></br>
                        <button className="loginbutton" onClick={this.handleSubmit}><p>Login</p></button>
                        <br></br>
                        <small ><a href="#" style={{color:"#FFAF5F",opacity:"0.7"}}>Forgotten Password</a></small>
                        <small style={{float:"right"}}><a href="/" style={{color:" #FFAF5F",opacity:"0.7"}}>Home</a></small>
                    </form>
                </div>
            </div>
            <div className="parentModelMob">
              
              <h1>Login</h1>
              
                <div className="loginModelMob">
                   <div style={{marginTop:"3em"}}>
                
                        <form className="loginModelForm">
                        {this.props.authState.error&&!this.state.isBackError?<Alert color="danger"style={{padding:"10px"}} >{this.props.authState.error.error}<p className="errorMessage" onClick={this.clearErrorBack}>close</p></Alert>:null}
                {this.state.errorStatus?<Alert color="danger" style={{padding:"10px"}} >{this.state.errorMessage}<p className="errorMessage" onClick={this.clearError}>close</p></Alert>:null}
                    {this.state.emailValidate?null: <Alert color="danger" style={{fontSize:"0.9em"}}>Email is invalid</Alert>}
                            <input type="email" name="email" placeholder="Username" onBlur={this.onKeyUpHandler} onChange={this.changeHandler}></input>
                            <input type="password" name="password" placeholder="Password"  onChange={this.changeHandler}></input>
                            
                        </form>
                        <div style={{margin:"0px 2em"}}>
                        <Button color="primary"style={{borderRadius:"25px"}}block onClick={this.handleSubmit}>Login</Button>
        
                        </div>
                        <div className="loginHr">
                           <hr></hr> 
                        </div>
                        <div className="loginFooter">
                        <small>Don't have an account? <a href="/signup">Signup</a></small>
                        </div>
                       
                      
                   </div>
                    
                </div>
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
        onLogin:(userLoginDetails)=>dispatch(loginUserFunction(userLoginDetails))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(login)
