import React from 'react';
import { GiNuclearPlant } from 'react-icons/gi';


const initialState={

        email:null,
        localId:null,
        userId:null,
        error:false,
        pending:false
        
}
const authReducer=(state=initialState,action)=>
 { 
     switch(action.type){
      
      case 'authSucess':
          console.log("authSucessData",action,state);
          return {...state,localId:action.local,userId:action.user,email:action.email, pending:false,error:false}
     
     case 'authError':
         console.log('authErrorData',action,state);
         return {...state,userId:null,localId:null, pending:false,error:true}

     case 'authPending':
         console.log("authPendingData",action,state);
         return {...state,userId:null,localId:null,pending:true,error:false}

     case 'logout':
         console.log("LogoutData",action,state);
         return {...state,userId:null,localId:null,pending:false,error:false,email:null}
     case 'test':
        console.log(action.type,"-------------------------------------");
          console.log("Tested Data",state)
          return state;    

    default:
        return state
  }

}

 export default authReducer;