import React, { Component } from 'react'
import './authentication.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
export class authentication extends Component {
  state = {
    user: null,
    isAuthenticated: false,
    changeicon: false,
    current: "none"
  }
  toggleHandler = () => {
    this.setState({
      current: "flex",
      changeicon: false
    })
  }
  toggleHandlerCross = () => {
    this.setState({
      changeicon: true,
      current: "none"
    })
  }
  componentDidMount() {
    if (sessionStorage.getItem("state")) {
      const data = JSON.parse(sessionStorage.getItem("state"));
      this.setState({ user: data });
      this.setState({ isAuthenticated: true })
    }
    this.setState({ changeicon: true })
  }

  logOutHandler = () => {

    sessionStorage.clear();
    this.setState({ isAuthenticated: false })
    this.props.history.push('/');
  }
 
  render() {
   
    return (
      <div className="pp">
        {/* desktop authenticate */}
        <div className="authentication-flex">
          <div className="nav-header">
            <h2>BookTrap</h2>
          </div>
          <div style={{ flexGrow: 1, backgroundColor: "#262833" }}></div>
          {/* apply authenticate here */}
          <div className="nav-body">
            {this.state.isAuthenticated ?
              <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/" style={{ color: "white" }}>{this.state.user.user.name}</a>
                <button onClick={this.logOutHandler} style={{backgroundColor:"inherit",color:"inherit",padding:"0px",border:"none",margin:"0px",cursor:"pointer"}}>Logout</button>
              </nav> :
              <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/signup">Signup</a>
                <a href="/login">Login</a>
              </nav>


            }
          </div>
        </div>


        {/* desktop authenticate end here */}

        {/* Mobile authenticate start here */}

        <div className="authenticate-flex-mob">


          <div>
            <div className="nav-header">
              <h4>BookTrap</h4>
            </div>
          </div>

          <div style={{ flexGrow: 1 }}></div>

          {/* logic part  */}
          <div>

            {this.state.changeicon ? <i className="fas fa-bars" style={{ fontSize: "1.5em", padding: "15px", opacity: 0.6 }} onClick={this.toggleHandler}></i>
              : <i className="fas fa-times" style={{ fontSize: "1.5em", padding: "15px", opacity: 0.6 }} onClick={this.toggleHandlerCross}></i>
            }
          </div>

        </div>
        <div style={{ display: `${this.state.current}` }} onClick={this.toggleHandlerCross}>
          <div style={{ height: "30vh", backgroundColor: "inherit", width: "100%", zIndex: 100, position: "relative", boxShadow: "0px 10px 10px 0 rgba(0,0,0,0.2)" }}></div>
          <div className="authenticate-mob-open" style={{ top: "60px", width: "100%", zIndex: 200, position: "absolute" }}>

            {/* authentication will go here */}
            {this.state.isAuthenticated ?

              <div className="nav-mob">
                <nav>
                  <a href="/dashboard">Dashboard</a>
                  <a href="/" style={{ color: "white" }}>{this.state.user.user.name}</a>
                  <button onClick={this.logOutHandler} style={{backgroundColor:"inherit",color:"inherit",padding:"15px",border:"none",margin:"0px",cursor:"pointer",opacity:"0.8"}}>Logout</button>
                  <a href="/about">About</a>
                </nav>
              </div> :
              <div className="nav-mob">
                <nav>
                  <a href="/">Home</a>
                  <a href="/login">Login</a>
                  <a href="/signup">Signup</a>
                  <a href="/about">About</a>

                </nav>
              </div>}

            {/* authentication will end here */}
          </div>
        </div>

      </div>

    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth
})
export default withRouter(connect(mapStateToProps, null)(authentication))
