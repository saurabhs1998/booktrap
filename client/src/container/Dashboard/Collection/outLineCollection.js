import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actionCreator from '../../../action/Collection/collectionAction';
import {getUserId} from '../../../action/StoredStore/presistStore';
import OutlineNoteBook from '../../OutlineNotebook/outLineNotebook';
import {Spinner } from 'reactstrap';
import './outLineCollection.css';
export class outLineCollection extends Component {
    state={
        datalist:this.props.collection.userCollection,
        createNewList:false,
        mobileView:null
    }
   
    componentDidMount()
    {
        const userId=getUserId();
        this.props.ongetUserCollectionFunction(userId);
        
    }
    
    componentDidUpdate(prevProps,nextState)
    {
            if(this.props.collection.userCollection!==nextState.datalist)
            {
                this.setState({
                    datalist:this.props.collection.userCollection
                })
            }
    }
   
   
   
    showHideHandler=()=>{
        this.setState({createNewList:!this.state.createNewList})
    }
    addNewBookCreateHandler=()=>{

    const obj={
        bookTitle:"",
        bookAuthor:"",
        bookReview:"",
    }
    this.props.onputUserCollectionFunction(obj);
 
    }
    
    deleteButtonHandler=(id)=>{
       console.log("deleted",id)
        this.props.ondeleteOneCollectionFunction(id);
    //   let data1=this.state.datalist;
    //   data1.splice(id,1);
    //   this.setState({datalist:data1});
    }
    updatecollectionHandler=()=>{
        const updateData=JSON.parse(localStorage.getItem("datatoupdated"));
        console.log(updateData,"from outline collection")
        this.props.onupdateUserCollection(updateData);
    }
    render() {
        const {isLoading}=this.props.collection;
       console.log(this.state.datalist)
        if(this.state.datalist===null)
        {
                    return <Spinner color="success" type="grow"></Spinner>
        }else{
       
        return (
          <div>
                { isLoading?<Spinner color="success" type="grow"></Spinner>:this.state.datalist.map((num,id)=>{
                       return <OutlineNoteBook bookName={num.bookTitle} authorName={num.bookAuthor} bookReview={num.bookReview} templateid={num._id} deleteHandler={this.deleteButtonHandler.bind(this,num._id)} fire={this.updatecollectionHandler}></OutlineNoteBook>
                   })} 
                }
                
                <div style={{textAlign:"center"}}>
                 {/* <span  className="plusButton" onClick={this.addNewBookCreateHandler}>
                 <i className="material-icons" style={{fontSize:"3rem"}}>add_circle</i>     
                </span>  */}
                <span class="fa-stack fa-2x" id="iconparentCollection" onClick={this.addNewBookCreateHandler}>
                <i class="fas fa-circle fa-stack-2x" style={{color:"rgba(0,0,0,0.5)"}}></i>
               <i class="fas fa-plus fa-stack-1x fa-inverse"></i>
           </span>
                </div> 
          </div>
        )
    }
}
}
const mapStateToProps=(state)=>({
    collection:state.collection
})

const mapDispatchToProps=dispatch=>{
    return{
        ongetUserCollectionFunction:(userId)=>dispatch(actionCreator.getUserCollectionFunction(userId)),
        onputUserCollectionFunction:(postData)=>dispatch(actionCreator.putUserCollectionFunction(postData)),
        ondeleteOneCollectionFunction:(collectionId)=>dispatch(actionCreator.deleteOneCollectionFunction(collectionId)),
        onupdateUserCollection:(updateData)=>dispatch(actionCreator.updateUserCollection(updateData)),
    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(outLineCollection);
