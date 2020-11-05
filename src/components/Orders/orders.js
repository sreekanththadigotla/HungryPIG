import React from  'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Delete } from '../../Actions/ChildComp/childComp';
import { getOrderss } from '../../Actions/HomeAction/homeAction';
import Loader from '../../utility/Loader/loader';
import classes from './orders.css';

class Orders extends React.Component{

  

    render()
    {
        let ord = "No Orders! Please order"
         console.log(this.props.orders)
        
            if(this.props.orders.length>0)
            {
    //    ord=this.props.orders.map((data,index)=>
        ord=this.props.orders.map((data,index)=>
                (  
    
                  <div className={classes.MainCardScroll}key={index} >       
                      <div className={classes.mainCard}>
                      <div className={classes.mainCard__Left}>
                      <span className={classes.area}>{data.area}</span> 
                      <span className={classes.times}>{data.times} x {data.name}</span>
                      </div>
                    
                      <div className={classes.mainCard__Right}>
        
                      <span className={classes.price}>{data.price}/-</span>
                      <span className={classes.remove} onClick={()=>this.props.delete(data,index)}>Delete
                      {
                          this.props.deleteOrd && <div className={classes.Loads}>   <Loader   /> </div>

                      }
                      </span>
                      
                      </div>
                    
                          </div>
                          {

                           }
                          </div>

      
                
                )
                
                )
                console.log(ord)
            }
      
        

         
         

        return(
             
          <div className={classes.orderCentre}>
          {ord}
          </div>
             
  
        )
    }

    componentDidMount()
    {
       this.props.getOrders();
    }
}


const mapStateFromProps = (store) =>
{
    return{

        orders:store.home.totalOrders,
        deleteOrd:store.child.deleteOrder
    }
}

const mapDispatchFromProps = dispatch =>
{
    return{
          delete:(data,id)=>dispatch(Delete(data,id)),
          getOrders:()=>dispatch(getOrderss())
    } 
}
 
export default connect(mapStateFromProps, mapDispatchFromProps) (withRouter(Orders));