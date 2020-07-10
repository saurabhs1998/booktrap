import React,{Component} from 'react'
import HeadTitle from '../HeadingTitle/headingTitle';
import HeadTitleMob from '../HeadingTitle/headingTitleMob';

import './genrecat.css';
class Genercat extends Component  {
    searchHandler=(name)=>{
        sessionStorage.setItem("search",name);
    }
    render()
    {
    return (
        
        <div>
                <div className="desktopViewGener">
                <HeadTitle title="Find By Gener"></HeadTitle>
                </div>
               <div className="mobileViewGener">
                   <HeadTitleMob title="Find By Gener"></HeadTitleMob>
               </div>
            
           <div className="categoryGener">
            <div style={{backgroundColor:"dodgerblue"}}>
                 <span className="fa-stack fa-2x" id="iconparent">
                    <i className="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
                     <i className="fas fa-snowboarding fa-stack-1x fa-inverse"  id="genreIcon"></i>
                </span>
                <p onClick={this.searchHandler.bind(this,"action")}><a href="/gener">Adventure</a></p>
            </div>
          
            <div style={{backgroundColor:"#ab47bc"}} >
                 <span className="fa-stack fa-2x" id="iconparent">
                    <i className="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
                     <i className="fas fa-chart-line fa-stack-1x fa-inverse" id="genreIcon"></i>
                </span>
                <p onClick={this.searchHandler.bind(this,"business") }><a href="/gener">Business&Economics</a></p>
            </div>

            <div style={{backgroundColor:"#ec407a"}}>
                 <span className="fa-stack fa-2x" id="iconparent">
                    <i className="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
                     <i className="fas fa-user-astronaut fa-stack-1x fa-inverse"  id="genreIcon"></i>
                </span>
                <p onClick={this.searchHandler.bind(this,"fiction")}><a href="/gener">Fiction</a></p>
            </div>

            <div style={{backgroundColor:"#ef5350"}}>
                 <span className="fa-stack fa-2x" id="iconparent">
                    <i className="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
                     <i className="fas fa-heart fa-stack-1x fa-inverse"  id="genreIcon"></i>
                </span>
                <p onClick={this.searchHandler.bind(this,"romance")}><a href="/gener">Romance</a></p>
            </div>

            <div style={{backgroundColor:"#9575cd"}}>
                 <span className="fa-stack fa-2x" id="iconparent">
                    <i className="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
                     <i className="fas fa-caravan fa-stack-1x fa-inverse"  id="genreIcon"></i>
                </span>
                <p onClick={this.searchHandler.bind(this,"nonFiction")}><a href="/gener">Non-Fiction</a></p>
            </div>

            <div style={{backgroundColor:"mediumseagreen"}}>
                 <span className="fa-stack fa-2x" id="iconparent">
                    <i className="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
                     <i className="fas fa-book fa-stack-1x fa-inverse"  id="genreIcon"></i>
                </span>
                <p onClick={this.searchHandler.bind(this,"biography")}><a href="/gener">Biographies</a></p>
            </div>
            </div>
           
           
        </div>
       
    )
}
}
export default Genercat;