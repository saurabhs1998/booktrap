import React from 'react'
import Spinner from 'reactstrap';
import './ranking.css';
export default function ranking(props) {
  
    return (
        <div>{props.data?
            <div className="rankingContainer">
           
            <div>
            <span class="material-icons" style={{color:"yellow",fontSize:"2em"}}>emoji_events</span><br></br>
    <h2>{props.data.bookRankLast}</h2>
            Rank last Week<br></br>
            </div>
            <div>
            <span class="material-icons" style={{color:"#FF80AB",fontSize:"2em"}}>emoji_flags</span><br></br>
    <h2>{props.data.bookRank}</h2>
            Current Rank<br></br>
            </div>
            <div>
            <span class="material-icons" style={{color:"yellow",fontSize:"2em"}}>terrain</span><br></br>
            <h2>{props.data.bookPublishedDate}</h2>
            Published date<br></br>
            </div>
            <div>
            <span class="material-icons" style={{color:"yellow",fontSize:"2em"}}>note</span><br></br>
            <h2>{props.data.bookPageCount}</h2>
            Total Page Count<br></br>
            </div>
            
           
        </div>:null}</div>
        
    )
}
