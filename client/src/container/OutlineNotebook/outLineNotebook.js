import React,{useState,useEffect} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './outlineNotebook.css';
import OutlineEditing from '../Inline Editing/outlineEditing';
function updateWithNetwork(dataToUpdate)
{
    console.log(dataToUpdate,"from outline collection")
const {bookAuthor,bookTitle,bookReview}=dataToUpdate;

const regx=/\bClick.here\b/;
let isbook=regx.test(bookTitle);
let isauthor=regx.test(bookAuthor);
let isreview=regx.test(bookReview);
if(!isbook&&!isauthor&&!isreview)
{
  
   
    localStorage.setItem("datatoupdated",JSON.stringify(dataToUpdate));
    dataToUpdate.firefun();
}
    
    
}
function BookListContainerComponent(props){
    
    const propsBookName=props.bookName?props.bookName:"Click here and start editing Your Book Name!";
    const propsAuthorName=props.authorName?props.authorName:"Click here and start editing Author Name!";
    const propsBookReview=props.bookReview?props.bookReview:"Click here and start editing Book Review";
    const [storeBookName,setBookName]=useState(propsBookName);
    const [storeAuthorName,setAuthorName]=useState(propsAuthorName);
    const [storeBookReview,setBookReview]=useState(propsBookReview);
    const [storeDisplayButton,setDisplayButton]=useState(false);
    const[storeSomeEdit,setSomeEdit]=useState(false);
    const[storeMultiple,setMultiple]=useState(false);
    useEffect(() => {
    if(storeMultiple===true)
    {
        setDisplayButton(false);
        setSomeEdit(true);
        setMultiple(false);
        
    }
        
    }, [storeMultiple])
      useEffect(() => {
        
          if(storeSomeEdit===true)
          {
              const dataToUpdate={
                  collectionId:props.templateid,
                  bookTitle:storeBookName,
                  bookAuthor:storeAuthorName,
                  bookReview:storeBookReview,
                  firefun:props.fire
              }
              console.log(dataToUpdate,"printing")
              updateWithNetwork(dataToUpdate);
          }
        
      }
        )
       
    return(
        <div>
        <Jumbotron className="parentWrapper">
       <span style={{float:"right"}} >
  
           <i className="material-icons" id="deleteButton" style={{padding:"5px"}} onClick={props.deleteHandler}>delete_forever</i> </span>
         
            <div className="childWrapper"  >
                    <h2 ><OutlineEditing 
                    text={storeBookName} onSetText={text=>setBookName(text)}
                    editMode={storeDisplayButton}
                    ></OutlineEditing> <span role="img"></span></h2> 
                     <p id="createCollection"><OutlineEditing   text={storeAuthorName} onSetText={text=>setAuthorName(text)}  editMode={storeDisplayButton}></OutlineEditing> </p> 
                     <p className="review">
                        <OutlineEditing  textAreaNeeded="true" text={storeBookReview} onSetText={text=>setBookReview(text)}  editMode={storeDisplayButton}></OutlineEditing>
                     </p> 
                     <div className="button-mob">
                     <Button color="danger" disabled={!storeDisplayButton} onClick={()=>setMultiple(true)} size="sm">Edit Done</Button>
                    <Button color="success"  disabled={storeDisplayButton}onClick={()=>setDisplayButton(true)} size="sm">Start Edit</Button>
                     </div>
                     <div className="button-desk">
                    <Button color="danger" disabled={!storeDisplayButton} onClick={()=>setMultiple(true)} >Edit Done</Button>
                    <Button color="success"  disabled={storeDisplayButton}onClick={()=>setDisplayButton(true)} >Start Edit</Button>
                    </div>
                    </div>
        </Jumbotron>
        
        </div>
        );
    }
export default BookListContainerComponent;