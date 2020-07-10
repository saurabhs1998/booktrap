import React,{useState} from 'react'
import {Row,Col,Jumbotron,Collapse, Button} from 'reactstrap';
import '../userCollection.css';
export default function UserCollectionOutline(props) {
   const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
   return (
      <div>
            {/* desktop version */}
         <div className="usercollectiondesktopView">
           <Jumbotron style={{padding:"20px",border:"3px solid pink",backgroundColor:"inherit",color:"#bdbdbd"}}>
                            <Row>
                                <Col md="4" style={{textAlign:"center"}}>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
                                <span className="fa-stack fa-4x" >
                    <i className="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
                     <i className="fas fa-user-astronaut fa-stack-1x fa-inverse"  id="genreIcon"></i>
                </span>
                         
                                </div>
                              <small style={{color:"wheat",fontSize:"1em"}}>Total Books Reviewed:{props.count}|Gener like most:{props.generLiked}</small> 
                                   
                                </Col>
                                <Col md="8" className="userabout">
                                 <h2>{props.userName}</h2>
                                 <small>About {props.firstName}</small>
                                 <p > {props.aboutUser}.</p>
                                <hr></hr>
                                <span class="fa-stack fa-1x">
                                  <i class="fas fa-circle fa-stack-2x" style={{color:"red"}}></i>
                                 <i class="fas fa-heart fa-stack-1x fa-inverse"  ></i>
                                </span>
                                <span class="fa-stack fa-1x">
                                  <i class="fas fa-circle fa-stack-2x" style={{color:"dodgerblue"}}></i>
                                 <i class="fas fa-share fa-stack-1x fa-inverse"  ></i>
                                </span>
                                </Col>
                            </Row>
                        </Jumbotron>
                        </div>


                        <div className="userColMobView">
           <Jumbotron style={{padding:"5px",border:"3px solid pink",backgroundColor:"inherit",color:"#bdbdbd"}}>
                            <Row>
                                <Col md="4" sm="12" xs="12" style={{textAlign:"center"}}>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
                                <span className="fa-stack fa-2x" >
                    <i className="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
                     <i className="fas fa-user-astronaut fa-stack-1x fa-inverse"  id="genreIcon"></i>
                </span>
                         
                                </div>
                              <small style={{color:"wheat",fontSize:"1em"}}>Total Books Reviewed:{props.countReview}|Gener like most:{props.generLiked}</small> 
                                   
                                </Col>
                                <Col md="8" xs="12" sm="12"className="userabout">
                                 <h4 style={{textAlign:"center"}}>{props.userName}</h4>
                                 {isOpen?<p onClick={toggle} style={{textAlign:"center"}}>Hide Details<span><i class="fas fa-angle-up" style={{color:"white"}}></i></span></p>:
                                 <p onClick={toggle} style={{textAlign:"center"}}>Find more about {props.firstName} <span><i class="fas fa-angle-down" style={{color:"white"}}></i></span></p>}
                                
                                 <Collapse isOpen={isOpen}>
                                 <hr style={{borderColor:"#bdbdbd"}}></hr>
                                 <p style={{margin:"1em",textAlign:"center"}}>{props.aboutUser}.</p>
                                <hr></hr>
                               
                                 </Collapse>
                                
                                </Col>
                            </Row>
                            
                        </Jumbotron>
                        </div>


             
      </div>
   )
}
