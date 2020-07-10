import React from 'react'
import './banner.css';
export default function banner() {
    return (
        <div className="parentWrapperBanner">
            <h1>What We Offer</h1>

            <div className="childWrapperBanner">
                <div className="childD1">
                    <span class="fa-stack fa-3x">
                        <i class="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
                        <i class="fas fa-book-open fa-stack-1x fa-inverse"  ></i>
                    </span>
                    <h2> Feature Books</h2>
                </div>
                <div className="childD2">
                <span class="fa-stack fa-3x">
                        <i class="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
                        <i class="fas fa-pencil-alt fa-stack-1x fa-inverse"  ></i>
                    </span>
                    <h2>Create Collection</h2>
                </div>
                <div className="childD3">
                <span class="fa-stack fa-3x">
                        <i class="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
                        <i class="fas fa-share-alt fa-stack-1x fa-inverse"  ></i>
                    </span>
                    <h2>Create Collection</h2>
                </div>
            </div>
        </div>

       
    )
}
