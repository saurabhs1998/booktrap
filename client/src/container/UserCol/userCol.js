import React from 'react'
import './user.css';
import {Container,Row,Col, Jumbotron} from 'reactstrap';
export default function userCol() {
    return (
        <div className="usercolcontainer">
        <Container fluid>
            <Row>
                <Col md="12" style={{padding:"0px"}}>
                    <Jumbotron  className="usercol" style={{backgroundColor:"#3A344A"}}>
                        <div className="innerContentUser">
                        <h2>Collection of recommended books</h2>
                        <h4>by book lovers</h4>
                     <a href="/usercollection">  <button className="layoutButton"> Open Collection</button></a> 
                        </div>
                    </Jumbotron>
                    <div className="usercolimage">
                        <img src={require('../../image/collection.png')} alt="background"></img>
                    </div>
                </Col>
                
            </Row>
        </Container>
        </div>
    )
}
