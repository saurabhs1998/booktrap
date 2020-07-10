import React, { Component } from 'react'
import Auth from '../Authentication/authentication';
import HeadingTitle from '../../component/HeadingTitle/headingTitle';
import * as actionCreator from '../../action/Collection/collectionAction'
import FeaturedBooksComponent from '../../component/Featured_Books/featuredBooksComponent';
import { Container, Jumbotron} from 'reactstrap';
import {connect} from 'react-redux';

import ImageCard from '../../component/ImageCard/imageCard';
import ImageCardMob from '../../component/ImagecardMob/imageCardMob';
import HeadingTitleMob from '../../component/HeadingTitle/headingTitleMob';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import './selectedGener.css';
const genreTerm=sessionStorage.getItem("search");
export class selectedGener extends Component {
   
     componentDidMount()
     {
       this.props.ongetBookCollectionListSpecific(); 
     }
  
    render() {
        const nameSearch=sessionStorage.getItem("search")
        const data=this.props.collection.bookListCollectionSpecific[nameSearch]
       
        return (
            <div>
                <Auth></Auth>
                <Container style={{paddingRight:"0px",paddingLeft:"0px"}}>
                  <div className="desktopViewGener">
                    <Jumbotron style={{padding:"16px 32px",backgroundColor:"#6773AE"}}>
                    <HeadingTitle title={`Showing your search result for ${genreTerm}`}></HeadingTitle>
                   
                    </Jumbotron>
                    <Jumbotron className="bookListJumbo" style={{backgroundColor:"#B9C6C8",position:"relative"}}>
            <div className="bookListContainer">
            {data?data.map((book)=>{
                    return  <FeaturedBooksComponent bookName={book.bookName}
                    aboutBook={book.bookShortDesc}
                    link={book.isBookImage?`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=2&source=gbs_api`:book.nytImage}
                    width="183"
                    height="270"
                    id={book._id}
           ></FeaturedBooksComponent>
           
                }):null}
               
            </div>
            
           
        </Jumbotron>
                        
        <Jumbotron style={{padding:"16px 32px",backgroundColor:"#6773AE"}}>
                    <HeadingTitle title={`Free E-Books for ${genreTerm}`}></HeadingTitle>
                   
                    </Jumbotron>

                    <div className="monthsPickContainer">  
                   {data?
                   data.map((book,id)=>{
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
                      <div className="mobileViewGener">
                     
                    <HeadingTitleMob title={`Search result ${genreTerm} Gener`}></HeadingTitleMob>
                    <div className="monthsPickContainer">  
                   {data?
                   data.map((book,id)=>{
                       return<ImageCardMob
                                key={id}
                                bookName={book.bookName}
                                aboutBook={book.bookDescShort}
                                link={book.isBookImage?`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=2&source=gbs_api`:book.nytImage}
                              
                                id={book._id}
                       ></ImageCardMob>
                   })
                   :Array(4).fill().map(()=>
                   <SkeletonTheme color="#37474F" highlightColor="#546E7A">
                      
                       <Skeleton height={220} width={140}>
                       </Skeleton>
                   </SkeletonTheme>)}

               </div>
               <div style={{backgroundColor:"#424242",padding:"10px 0px"}}>
                 <HeadingTitleMob title="Free Ebooks"></HeadingTitleMob>
               </div>
               <div className="bookListContainer">
            {data?data.map((book)=>{
                    return  <FeaturedBooksComponent bookName={book.bookName}
                    aboutBook={book.bookDescShort}
                    link={book.isBookImage?`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=2&source=gbs_api`:book.nytImage}
                    width="183"
                    height="270"
                    id={book._id}
           ></FeaturedBooksComponent>
           
                }):null}
               
            </div>
                      </div>
              
                </Container>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    collection:state.collection
  })
  const mapDispatchToProps=dispatch=>{
    return{
      ongetBookCollectionListSpecific:()=>dispatch(actionCreator.getBookCollectionListSpecific())
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(selectedGener);