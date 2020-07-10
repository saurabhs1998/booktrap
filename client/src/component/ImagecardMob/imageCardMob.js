import React from 'react';

const imageCardMob=(props)=>{
    const linktogo="/bookdetail/"+props.id;
    return (
        <div>
           <a href={linktogo}><img src={props.link} width="140px" height="220px" alt="imagegroup"></img></a>
            
            </div>
    )
}
export default imageCardMob;