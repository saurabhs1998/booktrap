import React from 'react'
import './headingTitle.css';
export default function headingTitle(props) {
    return (
        <div className="headingTitle" style={{margin:`${props.margin}`}}>
            <h4>{props.title}</h4>
        </div>
    )
}
