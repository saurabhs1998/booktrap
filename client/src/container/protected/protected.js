import React from 'react'
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';

const data=sessionStorage.getItem("state");
const dataid=JSON.parse(data);
let authenticated=false;
if(dataid)
{
    authenticated=true
}

const privateRoute=({component:Component,...rest})=>(
    <Route {...rest} render={(props)=>(
       authenticated?<Component {...props}/>:
        <Redirect to="/login"></Redirect>
    )}></Route>
)
const mapStateToProps=state=>({
    auth:state.auth
})

export default connect(mapStateToProps,null)(privateRoute)
