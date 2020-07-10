import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom';
import Homepage from './component/Homepage/homepage';
import Signup from './container/Singup/signup';
import Login from './container/Login/login';
import BookDetail from './container/BookDetail/bookdetails';
import Dashboard from './container/Dashboard/dashboard';
import SelectedGener from './container/SelectedGenre/selectedGener';
import Usercollection from './container/User_Collection/userCollection';
import About from './component/About/about';
import Protected from './container/protected/protected';
export class App extends Component {
  render() {
    return (
     <Switch>
     <Route exact path="/" component={Homepage}></Route>
     <Route path="/login" component={Login}></Route>
     <Route path="/signup" component={Signup}></Route>
     <Protected path="/dashboard" component={Dashboard}></Protected>
     <Route path="/bookdetail/:bookId" component={BookDetail}></Route>
     <Route path="/gener" component={SelectedGener}></Route>
     <Route path="/about" component={About}></Route>
     <Route path="/usercollection" component={Usercollection}></Route>
     </Switch>
  
    )
  }
}

export default App
