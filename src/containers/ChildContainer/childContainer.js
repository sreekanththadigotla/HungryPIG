import { CardElement, Elements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { data } from "autoprefixer";
import Axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { childGet, childSub, sendOrders } from "../../Actions/ChildComp/childComp";
import ChildComp from "../../components/Child/childComp/childcomp";
import Loader from "../../utility/Loader/loader";
import classes from "./childContainer.css";
import ReactDOM from 'react-dom';
// import axios from "./axios";

 const promise = loadStripe(
   "pk_test_51HcZKLHrUof7TtLvOdiZde77CzbvFMClbpmf6Ws4Aw0nUYkw3p0H6xHICuY0nQFhglvcTf7Y6UAfnJX9GF4euryu00iBND4UrC"
 );

class childContainer extends React.Component {
  state = {
    error: null,
    disabled: true,
    succeeded: false,
    processing: "",
    clientSecret: true,
    product:{
      name:"REACT FROM SREEKANTH",
      price:1000,
      productBy:"sreekanth"
    }
   
  };

  


    Fields = (event) =>
  {
       console.log(event.target.getAttribute("value"));
       
       this.props.filterItem(event.target.getAttribute("value"))
  }


    subtraction = (one,two) =>
  {
    console.log(one,two)
  }
 
    buy = (e) =>
    {
       if(this.props.loginEmail==null)
       {
          this.props.history.push("/")
       }
       else{
        console.log(e);
        console.log(this.props.totalOrders);
        console.log(this.props.userId)
        this.props.sendOrders(this.props.totalOrders,this.props.userId)
       }
        
    }
 


  render() {
    console.log(this.props.match);
    console.log(this.props.match.params.id)
    console.log(this.props.data);

    //Generate stripe secret which allows us to charge according to Customer
    const getClientSecret = async () => {
      const response = await Axios({
        method: "post",
        //Stripe ascepts the total in a currences submit
        url: "/payment/create?total=1000",
      });

      // setClientSecret(response.data.clientSecret)
    };

    const handleSubmit = async (event) => {
      //  event.preventDefault();
      //  this.setState({processing:true});
      // const payload = await stripe.confirmCardPayment(this.state.clientSecret,
      //  {payment_method :{
      //      card:Elements.getElement(CardElement)
      //  }
      // }).then(({paymentIntent}) => {
      //     //Payment Confirmation
      //     this.setState({succeeded:true,error:null,processing:false})
      //Dont want to comeback to payment page
      //     this.props.history.replace("/")
      //
      //   dispatch({type:"empty"}) => Empty the basket in the state
      // })
    };


  
       
   const makePayment = (token) =>
   {   
     let product= this.state.product
     const body = {
       token,
       product

     }
     const headers = {
       "Content-Type":"application/json"
     }

     

     return fetch('http://localhost:8282/payment',{
       method:"POST",
       headers,
       body:JSON.stringify(body)
     })
     .then(response =>
       {console.log(response) 
        })
     .catch(error => console.log(error))
   }

    const handleChange = (e) => {
      if (e.empty) {
        this.setState({ disabled: false });
      }

      if (e.error) {
        this.setState({ error: e.error.message });
      } else {
        this.setState({ error: "" });
      }
    };

 const   hai=(val)=>
  {
    console.log("Value",val);
    console.log(this)
    console.log(this.props)  
    this.props.addition(val);
     
  }
    console.log("Hello")
    console.log(this.props)
    let p=null;

    
      if(this.props.totalOrders.length>0)
      {
      p=  this.props.totalOrders.map((data,index)=>{
    
    return <div key={Math.random()}>
            <span className={classes.det}>{data.name} --  {data.price} x {data.times} </span>



          </div>   
    })

      }   
      
      
   let totalPrice = 0;
    
   if(this.props.totalOrders.length>0)
   {
      for(let k of this.props.totalOrders)
      {
        totalPrice = totalPrice+(k.times*k.price)
      }

   } 


 
 
    return (
      <React.Fragment>

        
    
            
       
        <div className={classes.itChild}> 
                 {/* <div className={classes.TotalOrders}>Total no of orders</div> */}
       
        <div  className={classes.ChildCenter}>
          {/* <div className={classes.insideChildCenter} onClick={this.Fields} >  */}
          {/* <div className={classes.firstHalf}> */}
          {/* <li value="All" className={classes.cc}>All</li>
          <li value="cbiryani" className={classes.cc} ref={this.chicken}>chicken</li>
          <li value="mbiryani"className={classes.cc} ref={this.mutton}>Mutton</li>
          <li value="cstarter" className={classes.cc} ref={this.starter}> ch.starter</li>   */}
          {/* </div> */}
                 
          {/* </div> */}
         
      <div className={classes.secondHalf}>
          <ChildComp
          className={classes.childs}
          properties={this.props.data}
          ClickChild={this.props.test}
           add={(vals,childIndex)=>  this.props.loginEmail ? this.props.addition(vals,childIndex):null}
           sub={(val,childIndexc)=>  this.props.loginEmail ? this.props.subtraction(val,childIndexc):null}
         ></ChildComp>

          <div className={classes.subs}> 

           <div className={classes.pay}>
             {

               totalPrice>0 && 
             <p className={classes.PPs}> Total : {totalPrice} </p>  



             }
        {
        // totalPrice>0  &&   <StripeCheckout
        //    stripeKey="pk_test_51HcZKLHrUof7TtLvOdiZde77CzbvFMClbpmf6Ws4Aw0nUYkw3p0H6xHICuY0nQFhglvcTf7Y6UAfnJX9GF4euryu00iBND4UrC"
        //    token={makePayment}
        //    name="Check Out"
        //    amount={this.state.price*100}>
        //   <button className={classes.BtnLarget} onClick={this.buy}>BUY</button>
        //   </StripeCheckout>

        // totalPrice>0 && 
        // <button className={classes.BtnLarget} onClick={this.buy}> "Buy" </button>,
        
        this.props.loginEmail==null && <div className={classes.BtnLarget} onClick={this.buy}>Please Login</div>
       

 
        }
        {
          (totalPrice>0 && this.props.loginEmail) ? <button  className={classes.BtnLarget} onClick={this.buy} >Buy</button>: null
        }

        {
        this.props.pending && <div className={classes.Loads}>   <Loader   /> </div>


        }
        

    
        
          </div>
          
         <h3> {p}</h3>
         
          </div>


     </div>
          {/* <h2>Total No Of Orders {this.props.noOfOrders}</h2> */}



        </div>
      

        
        </div>
       

 
      </React.Fragment>
    );
  }

  componentDidMount(){
    console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOT")
     const id = this.props.match.params.id;
     console.log(id)

     console.log(this.props.loginEmail);
    if(id !==null )
    {  console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOT")
       this.props.childGett(id);
    }



    if(this.props.loginEmail==null)
    {  let verifyVal =null;
        verifyVal= this.props.data.find((val)=>val.times >0);
        console.log(verifyVal);

        console.log(verifyVal!==null)
        if(verifyVal!==null)
        { console.log("Child CALLING")
          this.props.childget();
        }
    }
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  }

  componentWillUnmount()
  {
    console.log("-------------------------------------------------------")
  }
}

const mapStateToProps = (store) => {
  return {
    data: store.child.childElements,
    noOfOrders: store.child.orders.length,
    totalOrders:store.child.orders,
    userId:store.auth.userId,
    pending:store.child.pending,
    loginEmail :store.auth.email
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("Dispatching",dispatch)
  return {
     test: () => dispatch({ type: "childTest" }),
    addition:(val,cchildIndex) => dispatch({type:"add",data:val,childIndex:cchildIndex}),
    subtraction:(val,cchildIndex) => dispatch(childSub(val,cchildIndex)),
    filterItem:(val) => dispatch({type:"filter",data:val}),
    sendOrders:(dat,userId)=>dispatch(sendOrders(dat,userId)),
    doZero:() => dispatch({type:'zero'}),
    childGett:(val)=>dispatch(childGet(val)),
    childget:() => dispatch({type:"Zeroo"})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)( withRouter(childContainer));
