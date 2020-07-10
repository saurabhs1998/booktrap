import React from 'react';
import './fetauredBooks.css';
const featuredBooksComponent=(props)=>{
    const linktogo="/bookdetail/"+props.id;
    return (
        <div className="fbc">
           <a href={linktogo}><img src={props.link} width={props.width} height={props.height} alt="imagegroup"></img>
            </a>
            <p>{props.bookName}</p>
            </div>
    )
}
export default featuredBooksComponent;