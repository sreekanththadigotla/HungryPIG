import React from 'react';
import classes from './authComp.css';


  const authComp=(props)=>
{
   console.log(props)
   
   let input=null;

   switch(props.name)
   {
       case 'input':
           input = <input id={props.placeholder}  placeholder={props.placeholder}   onChange={props.changed} ></input>;
            break;

       default:
            input = <input  placeholder={props.placeholder}  onChange={props.changed} ></input>
   }

  //  npm i  --save enzyme react-test renderer enzyme-adapter-react-16

    let arr = [];
    arr.push(classes.inputs)
    

     if(props.placeholder==='email')
     {  
         if(!props.Evalid)
         {   arr = [];
             arr.push(classes.specialE)
         }

     }  

     if(props.placeholder==='password')
     {
        if(!props.Pvalid)
        {arr = [];
          arr.push(classes.specialP)
        }

     }
     
   
    return (
      
      <label for={props.placeholder}>{props.placeholder}</label>,
              <div className={arr.join(' ')}>
               
                {input}
                </div>
              );

 }

 
export default React.memo(authComp);