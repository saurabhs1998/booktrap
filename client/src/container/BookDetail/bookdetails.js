import React, { Component } from 'react'
import Auth from '../Authentication/authentication';
import { Jumbotron, Container ,Row,Col, Button,Input,Card,CardBody,CardText,CardSubtitle,CardImg,CardTitle, CardFooter} from 'reactstrap';
import {connect} from 'react-redux';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import * as actionCreator from '../../action/Collection/collectionAction';
import Ranking from './Ranking/ranking';
import RecentUserCollection from './Recentusercollection/recentUserCollection';
import ImageCardMob from '../../component/ImagecardMob/imageCardMob';
import IconsDiv from './iconsDiv';
import './bookdetails.css';
export class bookdetails extends Component {
    state={
        textappend:false
    }
    componentDidMount()
    {
        const{match:{params}}=this.props;
        const {bookId}=params;
       
        this.props.ongetIndividualBookDetail(bookId);
    }
    showNotification=()=>{
        alert("This feature will soon be available");
    }
    submitFeedbackHandler=()=>{
        if(this.props.collection.auth)
        {
            alert("This feature will soon be there");
        }else{
            alert("You must be logged in to  review this book")
        }
    }
    render() {
        let data;
          if(this.props.collection.bookDetail)
          {
              data=this.props.collection.bookDetail
          }
          return (
            <div>
                <Auth></Auth>
                <Container>
                    <Row>
                        <Col md="8" className="desktopViewBookDetails">
                            <Jumbotron style={{padding:"12px 12px",backgroundColor:"#424242",color:"#BDBDBD",boxShadow:"10px 15px 20px 0px rgba(0,0,0,0.2)"}}>
                               
                               {data? <div className="bookdetails">
                                    <div>
                                    <img src={data.isBookImage?`http://books.google.com/books/content?id=${data.id}&printsec=frontcover&img=1&zoom=2&source=gbs_api`:data.nytImage} width="183" height="275" alt="imagegroup" style={{borderRadius:"5px"}} ></img>
                                    </div>
                                    <div className="bookdetailsContent">
                                    <h4>{data.bookName}</h4>
                                    <h6>by {data.bookAuthor}</h6>
                                    <br></br>
                                    <p> {data.bookDescLong.length>200?<p>{data.bookDescLong.slice(1,300)}{this.state.textappend?<React.Fragment>{data.bookDescLong.slice(300)}</React.Fragment>:<Button outline color="info"style={{padding:"0px",border:"none"}} onClick={()=>this.setState({textappend:true})}>..read more</Button>} </p>:data.bookDescLong}</p>
                                    <hr></hr>
                               
                                    <div className="bookdetailsRating">
                                        <IconsDiv></IconsDiv>
                                        </div>
                                        {/* internal rating div end */}
                                    </div>
                                </div>:<div style={{backgroundColor:"dodgerblue",height:"275px"}}>
                                    <i class="fas fa-star" style={{color:"white"}}></i></div>}
                               
                            
                            </Jumbotron>
                        </Col>
                        <Col md="8" className="mobileViewBookDetails">
                        
                               
                               {data?
                               
                                <Card style={{boxShadow:"0px 2px 10px 0px rgba(0,0,0,0.5)"}}>
                               <CardImg top width="60%" height="240px" src={`http://books.google.com/books/content?id=${data.id}&printsec=frontcover&img=1&zoom=2&source=gbs_api`} alt="Card image cap" style={{borderRadius:"5px"}}/>
                  
        <CardBody style={{backgroundColor:"#424242",color:"#BDBDBD"}}>
          <CardTitle><b>{data.bookAuthor}</b></CardTitle>
          <CardSubtitle style={{fontWeight:"600"}}>by {data.bookAuthor}</CardSubtitle>
          
          <CardText style={{marginTop:"5px"}}>{data.bookDescShort}</CardText>
          
        </CardBody>
        <CardFooter style={{backgroundColor:"#424242"}}>
            <div className="footerCardicons">
            <IconsDiv></IconsDiv>
            </div>
        </CardFooter>
      </Card>:  <SkeletonTheme color="#37474F" highlightColor="#546E7A" >
                   <Skeleton height={145}></Skeleton>
                   <p style={{margin:"0px"}}><Skeleton  width={260}></Skeleton></p>
                   <Skeleton  width={160}></Skeleton>
    
               </SkeletonTheme>}
                               
                            
                           
                        </Col>
                        
                        <Col md="4">
                            
                            
                            {data?
                            <Jumbotron style={{padding:"16px 16px",backgroundColor:"#424242",color:"#BDBDBD",boxShadow:"10px 15px 20px 0px rgba(0,0,0,0.2)"}}>
                            <div className="aboutAuthor">
                            <small>About the author</small>
                           
                            <h5>{data.bookAuthor}</h5>
                            <p>{data.bookAuthor} is best known in the field of. His book {data.bookName} is New York Times {data.rank} bestseller. {data.bookAuthor} has some series of book that can make someone strong in.Find more .</p>
                            </div>
                            </Jumbotron>:<SkeletonTheme color="#37474F" highlightColor="#546E7A" >
                   <Skeleton height={145}></Skeleton>
                   <p style={{margin:"0px"}}><Skeleton  width={260}></Skeleton></p>
                   <Skeleton  width={160}></Skeleton>
    
               </SkeletonTheme>}
                          
                        </Col>
                    </Row>
                    <br></br>
                    <Ranking data={data}></Ranking>
                    <Row>
                        <Col md="12">
                            <Jumbotron style={{padding:"0px",backgroundColor:"inherit",border:"1px solid #DD3F77"}}>
                               <div className="RateIt" >
                                   
                               
                                   <div>
                                       <Button color="success"  style={{margin:"0px"}} onClick={this.showNotification}>Read the book</Button>
                                   </div>
                                   <div>
                                       <Button color="success" style={{margin:"0px"}} onClick={this.showNotification}>Download the book</Button>
                                   </div>
                                   <div>
                                       <Button color="info" style={{margin:"0px"}} onClick={this.showNotification}>Add to read later</Button>
                                   </div>
                                   <div>
                                       <Button color="info" style={{margin:"0px"}} onClick={this.showNotification}>Purchase this book</Button>
                                   </div>
                                   <div>
                                       <Button color="info" style={{margin:"0px"}} onClick={this.showNotification}>Add to cart</Button>
                                   </div>
                               </div>
                               <div className="RateItMob">
                                   <div>
                                   <Button size="md" color="success" style={{display:"inline"}}  onClick={this.showNotification}>Read the book</Button>
                                   </div>
                                    <div>
                                   <Button size="md" color="success" style={{display:"inline"}}  onClick={this.showNotification}>Download book</Button>
                                   </div>
                                   <div>
                                   <Button size="md" color="info" style={{display:"inline"}}  onClick={this.showNotification}>Read book later</Button>
                                   </div>
                                   <div>
                                   <Button size="md" color="info" style={{display:"inline"}}  onClick={this.showNotification}>Purchase  book</Button>
                                   </div><div>
                                   <Button size="md" color="info" style={{display:"inline"}}  onClick={this.showNotification}>Add to cart</Button>
                                   </div>
                               </div>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="8">
                            <Jumbotron style={{backgroundColor:"black",color:"wheat"}}>
                                What People are Saying
                                <hr></hr>
                                <Input type="textarea" placeholder="Your Comment on this"style={{height:"120px",backgroundColor:"rgba(0,0,0,0.5)",color:"white"}}></Input>
                                <br></br>
                                <Button color="success" onClick={this.submitFeedbackHandler}>Submit</Button>
                            </Jumbotron>
                        </Col>
                        <Col md="4">
                          <RecentUserCollection/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
collection:state.collection
})
const mapDispatchToProps=(dispatch)=>{
    return {
        ongetIndividualBookDetail:(bookId)=>dispatch(actionCreator.getIndividualBookDetail(bookId))
    }
}
export default connect (mapStateToProps,mapDispatchToProps)( bookdetails)
