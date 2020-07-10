import * as actionType from '../action/actionType';

const initialState={
    isLoading:true,
  userCollection:null,
  showCollection:null,
  createCollection:null,
  deletCollection:null,
  userProfile:null,
  updateCollection:null,
  error:null,
  bookListCollection:null,
  bookListCollectionSpecific:{
    business:null,
    romance:null,
    nonFiction:null,
    fiction:null,
    biography:null
},
  bookDetail:null
}
export default function (state=initialState,action) {
    switch(action.type)
    {
        case actionType.FETCH_DATA_START:{
            return {
                ...state,
                isLoading:action.payload
            }
        } 
        case actionType.FETCH_DATA_END:{
            return{
                ...state,
                isLoading:action.payload
            }
        }  
        case actionType.GET_ALL_COLLECTION:{
            return{
                ...state,
                showCollection:action.payload
            }
        }
        case actionType.GET_COLLECTION_BY_USER:{
            return{
                ...state,
                userCollection:action.payload
            }
        }
        case actionType.CREATE_COLLECTION:{
            return{
                ...state,
                userCollection:[...state.userCollection,action.payload]
            }
        }
        case actionType.UPDATE_COLLECTION:{
            return{
                ...state,
                updateCollection:action.payload
            }
        }
        case actionType.BOOKLIST_COLLECTION:{
       
            return{
                ...state,
                bookListCollection:action.payload
            }
        }
        case actionType.DELETE_COLLECTION:{
           console.log(state.userCollection,"before")
            return{
                ...state,
             userCollection:state.userCollection.filter(item=>item._id!==action.payload._id)
             
            }
           
        }
        case actionType.UPDATE_USER_PROFILE:{
            return{
                ...state,
                userProfile:action.payload
            }
        }

        case actionType.BOOKLIST_COLLECTION_SPECIFIC:{
                
            //for genere
            const data=action.payload;
            return{
                ...state,
                bookListCollectionSpecific:{
                    romance:data.slice(1,5),
                    fiction:data.slice(5,10),
                    action:data.slice(10,15),
                    business:data.slice(15,20),
                    nonFiction:data.slice(20,25),
                    biography:data.slice(25,30)

                }
            }
        }


        case actionType.BOOK_DETAIL_SINGLE:{
            return{
                ...state,
                bookDetail:action.payload
            }
        }
        case actionType.CREATE_COLLECTION_FAIL:
        case actionType.UPDATE_COLLECTION_FAIL:
        case actionType.GET_ALL_COLLECTION_FAIL:
        case actionType.GET_COLLECTION_BY_USER_FAIL:
        case actionType.DELETE_COLLECTION_FAIL:
        case actionType.BOOKLIST_COLLECTION_FAIL:
        case actionType.BOOK_DETAIL_SINGLE_FAIL:
        case actionType.BOOKLIST_COLLECTION_BUSINESS_FAIL:
        case actionType.BOOKLIST_COLLECTION_SPECIFIC_FAIL:{
            return{
                ...state,
                error:action.payload
            }
        }
        default:
            return state    
    }
}