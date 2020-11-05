import React from 'react';
 import classes from './childComp.css'

const childComp=(props)=>
{   
console.log(props)
    return(<div >


        {
            props.properties.map((data,index)=>
            {
                console.log(data,index)

                return(
                  
                //    <div className={classes.Childs}>
                /* //  <div className={classes.FirstChild}>
                //      <img src={data.image}></img>
                // </div> */
                
                 <div className={classes.Childs}>
                     <div className={classes.firstHalf}>
                     <div key={data.name} className={classes.childName}>{data.name}</div>
                     <div className={classes.maintainItems}>
                         <span className={classes.do} onClick={()=>props.sub(data,index)}>-</span>
                <span className={classes.dos}>{data.times}</span>
                         <span className={classes.do} onClick={()=>props.add(data,index)}>+</span>
                     </div>
                     
                     </div>
                     <span className={classes.childPrice}>RS: {data.price} /-</span>
                   {/* <span>{data.description}</span> */}
                   {/* <button onClick={props.ClickChild}>TEST</button> */}
                 </div> 
                   
                  
                //    </div>
                   
                  

                  )
            })
        }
      
        </div>
         )
}



export default React.memo(childComp);