import axios from 'axios';
import React from 'react';




export const afterFetch = (FetchedData) =>
{
    return{type:"HomeData",data:FetchedData} 

}

let FetchedData=[];
export const fetch = () => 
{
    return dispatch => {
         axios.get('https://food-80dee.firebaseio.com/restaurents.json')
         .then(response => {
             console.log(response.data);
              FetchedData.length=0;
             for(let k in response.data)
             {
                //  console.log(response.data[k]);

                 if(response.data[k]!==null)
                 {
                    FetchedData.push(response.data[k])
                 }

                 console.log(FetchedData)
                 dispatch(afterFetch(FetchedData))
             }
         })
         .catch(error=>
            {
                console.log("error ",error)
            })
         
    }
}



export const afterSearch = (data) =>
{
   return{type:'search',data:data}
   
}

export const  search = (data) =>
{  console.log("SEARCHING1")
    return async dispatch =>
    {    let k = [];
        let prevdata=data;
        try {
            const response =await  axios.get('https://food-80dee.firebaseio.com/searchArea.json')
            console.log(response.data)
            k.length=0;
             for(let d in response.data )
             {
                console.log(response.data[d])
                if(response.data[d]!==null)
                {
                    console.log(response.data[d].name.startsWith(data))
                    
                    if( response.data[d].name.startsWith(data) )
                    {
                      k.push(response.data[d].name)
                    }
                }
            } 
             console.log(k)
             dispatch(afterSearch(k))

        } catch (error) {
             console.log("got error as",error)
        }    

        console.log("Finally got data",data)

       
    }
     
    console.log("data",data);
}



 export const filterDataSend=(val)=>
{console.log("FUCK2",val)
    return {type:"filterData",value:val}
}

 

export const filterData=(value,filterArea)=>
{  console.log("SEARCHING2",value,filterArea);
   
  

    return async dispatch=>
    {   
        if(value==="All"&filterArea===null)
        {
            dispatch(fetch());
        }


            if(value!==null&filterArea===null)
            {
            
             console.log("FUCK",value)

               const response =await axios.get(`https://food-80dee.firebaseio.com/restaurents.json?&orderBy="type"&equalTo="${value}"`)
               console.log(response)
               dispatch(filterDataSend(response.data))
            }

           if(value!==null&filterArea!==null)
           { 
            
            console.log("FUCK3",value,filterArea)
            let url = `https://food-80dee.firebaseio.com/restaurents.json?orderBy="type"&equalTo="${value}"`;
          
                if(value==="All")
                {
                    url='https://food-80dee.firebaseio.com/restaurents.json';
                }

                const response =await axios.get(url)

             console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR")
              console.log(response.data)
               let nArray = [];
               for(let d in response.data)
               {  if(response.data[d]!==null){
                   console.log(response.data[d].area);
                   console.log(filterArea)
                   console.log(response.data[d].area == filterArea)
 
                   if(response.data[d].area===filterArea)
                      {
                       console.log(response.data[d].name===filterArea)
                       nArray.push(response.data[d])
                   }
                }
               }
      
      
            console.log(nArray);
            // console.log(nArray)
            dispatch(filterDataSend(nArray))
         
           }
     
    }
}

 


export const keys=(dat)=>
{
    return {type:"keyFind",data:dat};
}

export const keyFindd =(value) =>
{   console.log(value)
    console.log("SEARCHING3",value)
   
    console.log("ARRRRRRRRRRRRRREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEAAAAAAAAAAAAAAA")
    return  dispatch=>
    { 
       
        
        
        if(value.length>0){
        axios.get(`https://food-80dee.firebaseio.com/restaurents.json?&orderBy="area"&equalTo="${value}"`)
        
        .then(response=>
            {
                console.log(response.data)
                dispatch(keys(response.data))
            })
        .catch(err=>
            {
                console.log(err)
            })   
        console.log("Key Find");
       
    }
}
}


export const sendResult=(result) =>
{
    return {type:'TotalOrders', data:result}
}

export const getOrderss = () =>
{
  return dispatch => { 
   axios.get(`https://food-80dee.firebaseio.com/orders.json`)
    .then(response => 
        {
             let newResult = []; 
            
            console.log(response.data)

            for(let obj in response.data)
            {    let position = -1; 
                for(let objj in response.data[obj])
                {  
                    if(response.data[obj][objj]!==null){
                    console.log(response.data[obj][objj]);
                    console.log(Object.keys(response.data[obj])[position])
                    console.log(localStorage.getItem('userid'))
                    console.log(response.data[obj][objj].userId == localStorage.getItem("userid"))
                    if(response.data[obj][objj].userId == localStorage.getItem("userid"))
                    { position++;
                        newResult.push({...response.data[obj][objj],obj,newIndex:+Object.keys(response.data[obj])[position]})
                    }
                    else{
                        position++;
                    }
                }
                else{
                    position++;
                }
                }
            }
             console.log(newResult)
             dispatch(sendResult(newResult))
        })
     .catch(error => 
        {
            console.log(error)
        })   
}
}