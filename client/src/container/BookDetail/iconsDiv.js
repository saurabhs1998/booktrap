import React from 'react'

export default function iconsDiv() {
    return (
        <React.Fragment>
              <div id="bookIcon">
              <span class="material-icons"  style={{color:"#6d4c41"}} >
                visibility
                </span>
                <span class="tooltiptext">Total Visits</span>
                <br></br> 
                 4000
                </div>
                 <div  id="bookIcon">
                 <span class="material-icons" style={{color:"#ffa000"}} >
                grade
                </span>
                <span class="tooltiptext">Rating</span>
                <br></br> 
                4.5
                </div>
                <div id="bookIcon">
                 <span class="material-icons" style={{color:"#4a148c"}} >
                rate_review
                </span>
                <span class="tooltiptext">Total Reviews</span>
                <br></br> 
                200
                </div>
                <div id="bookIcon">
                 <span class="material-icons" style={{color:"#e53935"}} >
                favorite
                </span>
                <br></br> 
                <span class="tooltiptext">Total Like</span>
                200
                </div>
                <div id="bookIcon">
                 <span class="material-icons" style={{color:"green"}} >
                cloud_download
                </span>
                <br></br> 
                <span class="tooltiptext">Total Downloads</span>
                300
                </div>
                                       
                                    
        </React.Fragment>
    )
}
