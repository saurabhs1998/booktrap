import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import './footer.css';
export default function footer() {
    return (
       <Container style={{backgroundColor:"rgba(0,0,0,0.5)",color:"white",position:"absolute",marginTop:"45px",padding:"0px"}} fluid>
           <Row style={{margin:"0px"}}>
            <Col md="5" sm="12" xs="12" className="div1">
               <h6 id="footerHeader">About BookTrap</h6> 
                <br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. 

Sed velit lectus, porttitor eu convallis sit amet, semper eget mauris. Integer in pulvinar mauris. Donec facilisis placerat magna sed cursus. </p>
            </Col>
            
            <Col md={{size:4,offset:3}} xs="8" className="div2">
            <h6 id="footerHeader"> Contact info</h6><br></br>
            <address>Main Road Jharia,828111
            Dhanbad  ( Jharkhand ), India
            </address>
            <h6 id="footerHeader">Drop Mail at</h6>
            manishkumar1992222@gmail.com <br></br>
            <small>All right reserved @copyright youngheart12</small>
            </Col>
            <Col xs="4" className="footerQuick">
            <h6 id="footerHeader">Quick Link</h6>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/signup">Signup</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </Col>
            <Col xs="12" sm="12" md="12" style={{padding:"0px",margin:"0px"}}>
                <div className="footermedia">
                <i class="fab fa-facebook" id="facebook"></i>
                <i class="fab fa-instagram" id="instagram"></i>
                <i class="fab fa-twitter" id="twitter"></i>
                </div>
            </Col>
           </Row>
          
       </Container>
    )
}
