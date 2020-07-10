import React, { Component } from 'react'
import './monthsPick.css';
import '../../component/Homepage/homepage.css';
import {connect} from 'react-redux';
import HeadingTitle from '../../component/HeadingTitle/headingTitle';
import HeadingTitleMob from '../../component/HeadingTitle/headingTitleMob';

import ImageCard from '../../component/ImageCard/imageCard';
import ImageCardMob from '../../component/ImagecardMob/imageCardMob';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import Zoom from 'react-reveal/Zoom';



export class monthsPick extends Component {
  
    clickBookHandler=(id)=>{
        console.log(id);
    }

    render() {
        let datalist;
        if(this.props.loadingState)
        {
        datalist=this.props.bookData.slice(1,35)
        }
        console.log(this.props.bookData,"months",this.props.loadingState)
        console.log(datalist,"gots");
        
        return (
            <div>
            <div className="desktopViewMonth">
                <Zoom duration={1200} delay={200}>
               <HeadingTitle title="Top Month's pick for you" margin="50px 0px"></HeadingTitle> 
            </Zoom>
               <div className="monthsPickContainer">  
                   {this.props.loadingState?
                   datalist.map((book,id)=>{
                       return<ImageCard 
                                key={id}
                                bookName={book.bookName}
                                aboutBook={book.bookDescShort}
                                link={book.isBookImage?`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=2&source=gbs_api`:book.nytImage}
                                height="275"
                                width="183"
                                id={book._id}
                       ></ImageCard>
                   })
                   :Array(15).fill().map(()=>
                   <SkeletonTheme color="#37474F" highlightColor="#546E7A">
                      
                       <Skeleton height={275} width={183}>
                       </Skeleton>
                   </SkeletonTheme>)}

               </div>
            </div>

            <div className="mobileViewMonth">
               <HeadingTitleMob title="Top Month's pick for you" margin="10px 0px"></HeadingTitleMob> 
               <div className="monthsPickContainer">  
                   {this.props.loadingState?
                   datalist.map((book,id)=>{
                       return<ImageCardMob 
                                key={id}
                                bookName={book.bookName}
                                aboutBook={book.bookDescShort}
                                link={book.isBookImage?`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=2&source=gbs_api`:book.nytImage}
                               
                                id={book._id}
                       ></ImageCardMob>
                   })
                   :Array(2).fill().map(()=>
                   <SkeletonTheme color="#37474F" highlightColor="#546E7A">
                      
                       <Skeleton height={220} width={140}>
                       </Skeleton>
                   </SkeletonTheme>)}

               </div>
            </div>


            </div>
        )
    }
}

const mapStateToProps=(state)=>(
    {
        collection:state.collection
    }
)
export default connect(mapStateToProps,null)(monthsPick);
