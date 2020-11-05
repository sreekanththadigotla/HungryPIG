import React from 'react';
import axios from "axios";

export const authenticationSucess = (localId,userId,email) => {
  return { type: "authSucess" ,local:localId,user:userId,email};
  };

export const authenticationError = () => {
    return { type: "authError" };
  };

export const authenticationPending = () => {
    return { type: "authPending" };
  };

export const logout=()=>
  { 
      console.log("Logut Calling")
    return dispatch=>
    {
       
          dispatch({type:"logout"})  
          localStorage.removeItem("token")
          localStorage.removeItem("userid")
          localStorage.removeItem("expirein")
          localStorage.removeItem("email")    
          dispatch({type:"test"})
         
    }
}

export const autoLogout=(time)=>
{ let timer = null;
    return dispatch=>{

      timer = setTimeout(()=>
         {                 
           dispatch(logout());
           clearTimeout(timer);
         }, time)
    }
}
  

export const authlog = (e, p,login) => {
  console.log(e, p, login);
  return  (dispatch) => {
    let body = {
        "email": e,
        "password": p,
        "returnSecureToken": true
      };
      console.log(body);
      let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD7_gdOXCRTepNf-x8FDN25trNHn34h-mg'

      if(login)
      {
          url ='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7_gdOXCRTepNf-x8FDN25trNHn34h-mg'

      }

    dispatch(authenticationPending())
     axios.post(url,body)
    .then(response=>
        {
            console.log(response.data);
            console.log(  new Date( new Date().getTime()+response.data.expiresIn*1000))
            dispatch(authenticationSucess(response.data.localId,response.data.idToken,response.data.email));

                localStorage.setItem("token",response.data.idToken)
                localStorage.setItem("userid",response.data.localId)
                localStorage.setItem("expirein", new Date( new Date().getTime()+response.data.expiresIn*1000))
                localStorage.setItem("email",response.data.email)
                console.log("=======================================================================")
                 console.log(new Date().getTime()+response.data.expiresIn*1000 - new Date().getTime())
                 console.log()

              dispatch(autoLogout(new Date().getTime()+response.data.expiresIn*1000 - new Date().getTime()));
               
            })
    .catch((err)=>{
        console.log(err)
        dispatch(authenticationError());
    })

    
  };
};


export const localStore = (token,user,email) =>
{
    return authenticationSucess(token,user,email)
}



export const localItemSent = ()=>
{
   return  dispatch=>{
       let tokenId=  localStorage.getItem("token")
        let userId = localStorage.getItem("userid")
       let expires=  localStorage.getItem("expirein")
       let email =   localStorage.getItem("email")

        dispatch(localStore(tokenId,userId,email))
    }
}