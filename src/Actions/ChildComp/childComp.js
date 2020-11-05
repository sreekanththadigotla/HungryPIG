import axios from "axios";
import { getOrderss } from "../HomeAction/homeAction";

export const childGetOne = (d,i) =>
{
    console.log("______________",d)
    return {type:'child',data:[...d],indexNo:i}
}


export const childGet = (val) =>
{  console.log("====================",val)
    return dispatch =>
    {  console.log(val)
       axios.get(`https://food-80dee.firebaseio.com/restaurentDetails/parent${val}.json`)
       .then(response => {
           console.log(response.data);
           let newArray = [];
           console.log(newArray)
           for(let k in response.data)
           {
               if(response.data[k]!==null)
               {
                  newArray.push({...response.data[k],times:0,index:val})
               }
           }    
           
           console.log(newArray)
           dispatch(childGetOne([...newArray],val))

       })
    };  
}


export const filterChild = (filterItem) =>
{

    console.log("Filter child",filterItem);



}


 export const childSub = (val,cchildIndex) =>
{  console.log("HHHSARI ",val,cchildIndex)
    return {type:"sub",data:val,childIndex:cchildIndex}
     
}


export const helpSendOrders = (validate)=>
{
    return {type:'sendOrders', valid:validate}
}

export const sendOrders = (data,user)=>
{
    return dispatch=>
    {   console.log(data,user);
         const newBody = [];
          
         for(let obj of data)
         {
             newBody.push({...obj,'userId':user})
         }
          dispatch({type:"pending"})
        axios.post(`https://food-80dee.firebaseio.com/orders.json`,[...newBody])
        .then(response => {console.log(response)
          dispatch(helpSendOrders('sucess'))})
        .catch(error => {
            
            console.log(error)
          dispatch(helpSendOrders('error'))
        })
       
    }
}

export const helpDelete = (dat) =>
{
     return {type:"deleteOrder",data:dat}
}

export const Delete = (object,index) =>
{
    return dispatch =>
    {        console.log(object);
        console.log(index);
        dispatch({type:"deletePending"})
        console.log(`https://food-80dee.firebaseio.com/orders/${object.obj}/${object.newIndex}.json`)
        axios.delete(`https://food-80dee.firebaseio.com/orders/${object.obj}/${object.newIndex}.json`)
        // https://food-80dee.firebaseio.com/orders/-ML259Dq7zRAQ6-La98_/0.json
        .then(response =>
            {
                console.log(response);

                dispatch(helpDelete("deleted"));
 ///For the orders in the home
                dispatch(getOrderss());
            })
        .catch(error => 
            {
                console.log(error);
                
                dispatch(helpDelete("error"));

            })    
    }
}