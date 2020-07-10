import React from 'react'
import './headingTitle.css';
export default function headingTitleMob(props) {
    return (
        <div className="headingTitleMob" style={{margin:`${props.margin}`}}>
            <h4>{props.title}</h4>
        </div>
    )
}
