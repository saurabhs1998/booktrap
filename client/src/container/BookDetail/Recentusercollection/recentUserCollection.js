import React from 'react'
import {Jumbotron} from 'reactstrap';
import '../bookdetails.css';
export default function recentUserCollection() {
    return (
        <div>
             <Jumbotron style={{backgroundColor:"black",padding:"12px 16px"}}>
                                <h6 style={{color:"wheat"}}>Recent User Collection</h6>
                                <hr style={{borderColor:"#fafafa"}}></hr>
                                <div className="containermarquee">
                                    <div className="marquee">
                                <div style={{color:"white",opacity:"87%",padding:"0px 16px",marginBottom:"12px"}}>Dilip Kumar <span style={{float:"right"}}>20s ago</span></div>
                                <div style={{color:"white",opacity:"87%",padding:"0px 16px"}}>Mayank Soni<span style={{float:"right"}}>40s ago</span></div>
                                <div style={{color:"white",opacity:"87%",padding:"0px 16px",marginBottom:"12px"}}>Shivam Kumar <span style={{float:"right"}}>20min ago</span></div>
                                <div style={{color:"white",opacity:"87%",padding:"0px 16px"}}>Saurabh Singh<span style={{float:"right"}}>35min ago</span></div>
                                <div style={{color:"white",opacity:"87%",padding:"0px 16px",marginBottom:"12px"}}>Yuvraj Sharma <span style={{float:"right"}}>1hrs ago</span></div>
                                <div style={{color:"white",opacity:"87%",padding:"0px 16px"}}>Vijay Verma <span style={{float:"right"}}>2hrs ago</span></div>
                                </div>
                                </div>
                            </Jumbotron>
        </div>
    )
}
