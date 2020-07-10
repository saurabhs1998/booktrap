import React from 'react';
import './imageCard.css';
export default function imageCard(props) {
  const linktogo="/bookdetail/"+props.id;
    return (
        <div className="tiles" ><a className="tile" href={linktogo}><img src={props.link} width={props.width} height={props.height} alt="image"/>
    <div className="details"><span className="title">{props.bookName}</span><span className="info">{props.aboutBook}</span></div></a>
      </div> 
    )
}
