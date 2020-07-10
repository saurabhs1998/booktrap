import React from 'react'
import {Jumbotron} from 'reactstrap';
import FeaturedBooksComponent from './featuredBooksComponent';
import HeadingTitle from '../HeadingTitle/headingTitle';
import HeadingTitleMob from '../HeadingTitle/headingTitleMob';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';

import './fetauredBooks.css';
export default function fetauredBooks(props) {
    let datalist;
    if(props.loadingState)
    {
    datalist=props.bookData;
    }
    console.log(props.bookData,"featured")
    return (
   
    <div className="mainContainer">
        <div className="headTitleFeatureDesktop">
       <HeadingTitle title="What to read" margin="0px"></HeadingTitle>
      </div>
      <div className="headTitleFeatureMob">
       <HeadingTitleMob title="What to read" margin="0px"></HeadingTitleMob>
      </div>
        <Jumbotron className="bookListJumbo" style={{position:"relative"}}>
            <div className="bookListContainer">
                
              
                {props.loadingState?datalist.map((book,id)=>{
                    
                    return <FeaturedBooksComponent
                    key={id}
                    bookName={book.bookName}
                    aboutBook={book.bookDescShort}
                    link={book.isBookImage?`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=2&source=gbs_api`:book.nytImage}
                    width="183"
                    height="275"
                    id={book._id}
           ></FeaturedBooksComponent>
          
           
                }):Array(10).fill().map(()=>
                <SkeletonTheme color="#37474F" highlightColor="#546E7A">
                   
                    <Skeleton height={275} width={183}>
                    </Skeleton>
                </SkeletonTheme>)}
            
               
               </div>
            
           
        </Jumbotron>
        </div>
    
    )
}
