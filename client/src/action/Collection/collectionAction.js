import * as actionType from '../actionType';
import axios from 'axios';
import {setLoading ,stopLoading} from '../loading/loading';
import { getUserId } from '../StoredStore/presistStore';


//@getallusercollectioninhomepage

export const getAllUserFunction=()=>{
    return function(dispatch){

        dispatch({
            type:actionType.FETCH_DATA_START,
            payload:true
        })

        axios.get('api/collection/showCollection').then( ( res ) => {
            dispatch({
                type:actionType.GET_ALL_COLLECTION,
                payload:res.data
            })
            dispatch({
                type:actionType.FETCH_DATA_END,
                payload:false
            })
        }).catch((err)=>{
            
            dispatch({
                type:actionType.GET_ALL_COLLECTION_FAIL,
                payload:err
            })
        })
        
        
    }
}


//@getuserowncollection

export const getUserCollectionFunction=(userId)=>{

    return function(dispatch)
    {
        dispatch({
            type:actionType.FETCH_DATA_START,
            payload:true
        });
      
        axios.get(`api/collection/owner/${userId}`).then((res)=>{
            dispatch({
                type:actionType.GET_COLLECTION_BY_USER,
                payload:res.data
            })
            dispatch({
                type:actionType.FETCH_DATA_END,
                payload:false
            });
        }).catch((err)=>{
            dispatch({
                type:actionType.GET_COLLECTION_BY_USER_FAIL,
                payload:err
            })
        })
        dispatch(stopLoading);
    }
}

//@postownercollectionwithuserid

export const putUserCollectionFunction=(postData)=>{
    return function(dispatch)
    {
        
  
    const config={
        headers:{
            'Content-Type':'application/json'
        }
       
    };
    const userId=getUserId();
    axios.post(`api/collection/owner/${userId}`,postData,config).then((res)=>{
        dispatch({
            type:actionType.CREATE_COLLECTION,
            payload:res.data
        })
    }).catch((err)=>{
        dispatch({
            type:actionType.CREATE_COLLECTION_FAIL,
            payload:err
        })
    })
    }
}

//@updateownercollectionwithcollectionid

export const updateUserCollection=(updateData)=>{
    return function(dispatch)
    {
       console.log(updateData,"froma ction");
        const {collectionId,...rest}=updateData;

        const config={
            headers:{
                'Content-Type':'application/json'
            }
           
        };
        axios.patch(`api/collection/owner/update/${collectionId}`,rest,config).then((res)=>{
            dispatch({
                type:actionType.UPDATE_COLLECTION,
                payload:res.data
            })
            
        }).catch((err)=>{
            dispatch({
                type:actionType.UPDATE_COLLECTION_FAIL,
                payload:err
            })
        })
        
    }
}

//@updateuserprofilewithuserid

export const updateUserProfile=()=>{
    return function(dispatch)
    {
        dispatch(setLoading);
        let userId;
        axios.post(`owner/updateuser/${userId}`).then((res)=>{
            dispatch({
                type:actionType.UPDATE_USER_PROFILE,
                payload:res.data
            })
        }).catch((err)=>{
            dispatch({
                type:actionType.UPDATE_USER_PROFILE_FAIL,
                payload:err.data
            })
        })
    }
}
export const deleteOneCollectionFunction=(collectionId)=>{
    console.log("reachedd here of delete",collectionId)
        return function(dispatch)
        {
            axios.delete(`api/collection/owner/update/${collectionId}`).then((res)=>{
                dispatch({
                    type:actionType.DELETE_COLLECTION,
                    payload:res.data
                })
            }).catch((err)=>{
                dispatch({
                    type:actionType.DELETE_COLLECTION_FAIL,
                    payload:err
                })
            })
        }
}


//@getallbook

export const getBookCollectionList=()=>{
    return function(dispatch)
    {
        axios.get(`api/collection/bookcollectionlist`).then((res)=>{
            dispatch({
                type:actionType.BOOKLIST_COLLECTION,
                payload:res.data
            })
        }).catch((err)=>{
            dispatch({
                type:actionType.BOOKLIST_COLLECTION_FAIL,
                payload:err
            })
        })
    }
}



//@getallbookspecific

export const getBookCollectionListSpecific=()=>{
    return function(dispatch)
    {
        axios.get(`api/collection/bookcollectionlist`).then((res)=>{
            dispatch({
                type:actionType.BOOKLIST_COLLECTION_SPECIFIC,
                payload:res.data
            })
        }).catch((err)=>{
            dispatch({
                type:actionType.BOOKLIST_COLLECTION_SPECIFIC_FAIL,
                payload:err
            })
        })
    }
}

//@getallbooksingledetail

export const getIndividualBookDetail=(bookId)=>{
    return function(dispatch)
    {
        axios.get(`api/${bookId}`).then((res)=>{
            dispatch({
                type:actionType.BOOK_DETAIL_SINGLE,
                payload:res.data
            })
        }).catch((err)=>{
            dispatch({
                type:actionType.BOOK_DETAIL_SINGLE_FAIL,
                payload:err
            })
        })
    }
}



