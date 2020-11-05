import React,{pureComponent} from 'react';
import { connect } from 'react-redux';
import { authlog } from '../../Actions/AuthAction/authAction';
import  AuthComp  from '../../components/authComponent/authComp';
import classes from './authContainer.css';


class AuthContainer extends React.PureComponent
{   
    
     state={
        Form:{ email:{
            inputName:"input",
            inputConfig:{
                 inputType:"text",
                 inputPlaceholder:"email" 
            },
            validate:{
                required:true,
                isEmail:true,
                minlength:5
                
            },
            inputValue:"",
            validitity:true
         },
         password:{
             inputName:"input",
             inputConfig:{
                 inputType:"text",
                 inputPlaceholder:"password"
             },
             validate:{
                required:true,
                minlength:5
            },
             inputValue:"",
             validitity:true
         }
        },

         login:true
        
     }
  

     loginHandler=()=>
     {
         this.setState(prevState => ({login:!prevState.login}))
     }


     checkValid=(eventValue,placeholder)=>
     {
         let valid = true;
        console.log(eventValue,placeholder);

        if(this.state.Form[placeholder].validate)
           {
           //Check for Empty String
              if(this.state.Form[placeholder].validate.required)
              {
                    valid = eventValue.trim() !== '' && valid;
              }
               console.log("First",valid) 
           //Check for minLength
              if(this.state.Form[placeholder].validate.minlength)
              {
                  valid = this.state.Form[placeholder].validate.minlength < eventValue.trim().length && valid;

              }
            console.log("Second",valid)
          //Check for isEmail
            if (this.state.Form[placeholder].validate.isEmail) {
                const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                valid = pattern.test(eventValue) && valid;
                }   
            console.log("Thir",valid)    
           }

           return valid;
     }

     inputValueHandler=(event)=>
     {  console.log(event.target.placeholder)

         console.log(event.target.value);
         console.log(this.state.Form[event.target.placeholder]);
         console.log(this.state)
         let one = {...this.state.Form}

         //Checking validation
         let see =  this.checkValid(event.target.value,event.target.placeholder)
         console.log("-----------------------------------------------------------")
           console.log(see);
 

         console.log(one);
         let two = {...one[event.target.placeholder]}
         console.log(two);
         two.inputValue=event.target.value;
         two.validitity=see;
         console.log(two);
         one[event.target.placeholder] = two

       

        this.setState({Form:one},()=>console.log(this.state))
        console.log(this.state)

        //  let solo =this.state.Form[event.target.placeholder];
        //  this.setState({Form[event.target.placeholder]:event.target.value},()=>console.log(this.state))
     }
     auths()
     {
         console.log("AAAAAAAAAAAa")
     }
    render()
    {    
          let newArray = []
          for(let k in this.state.Form)
          {  
            newArray.push({key:k,details:this.state.Form[k],name:this.state.Form[k].inputName, valid:this.state.Form[k].validitity})
          }
          console.log(newArray);
          

       let r = newArray.map((d,i)=>{
           console.log(d)
               return <AuthComp 
                       type={d.details.inputConfig.inputType} 
                       placeholder={d.details.inputConfig.inputPlaceholder} 
                       value={d.details.inputValue}
                       changed={this.inputValueHandler}
                       name={d.name}
                       Evalid={this.state.Form.email.validitity}
                       Pvalid={this.state.Form.password.validitity}
                       ></AuthComp>
           })




        return(
           <div className={classes.Login}>
               <p className={classes.authStatus}>{this.props.authStatus ? "Email or Password is incorrect" : null}</p>
            <div className={classes.inputBox}>{r}</div>   
             <button className={classes.lbutton} 
             onClick={()=>this.props.auth(this.state.Form.email.inputValue,
                                          this.state.Form.password.inputValue,
                                          this.state.login
                                          )}>{ this.state.login ? 'login' : 'signup'}</button>
             <button className={classes.sbutton} onClick={this.loginHandler}>Switch to {this.state.login ? 'signup' : 'login'}</button>  
             {/* <button onClick={this.props.test}>TEST</button> */}
           </div> 
            
            
            )
    }
}


const mapStateToProps=(state)=>
{
   return{
    authStatus:state.auth.error
   }
}

const mapPropsToDispatch=(dispatch)=>
{   console.log("Dipathcing")
    return{
        
        auth:(e,p,l) => dispatch(authlog(e,p,l)),
        test : () => dispatch({type:'test'})


    }
}

export default connect(mapStateToProps,mapPropsToDispatch) (AuthContainer);