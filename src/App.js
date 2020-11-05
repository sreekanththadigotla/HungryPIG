import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { localItemSent } from './Actions/AuthAction/authAction';
import './App.css';
import HomeContainer from './containers/HomeContainer/homeConainer';
import classes from './App.css' 
import { BrowserRouter, Route } from 'react-router-dom';
 
 const Childcontainer = React.lazy(()=>import('./containers/ChildContainer/childContainer'))

 const Orders = React.lazy(()=>import('./components/Orders/orders'))

class App extends Component {
  render()
  {
    return(
      <div>
        <BrowserRouter>
        <Route path="/" exact component={HomeContainer} />  
        <Route path="/child/:id" exact render={()=>(<Suspense fallback={<div>Loading...</div>}><Childcontainer/></Suspense>)}></Route> 
        <Route path="/Orders" exact render={()=>(<Suspense fallback={<div>Loading...</div>}><Orders/></Suspense>)}></Route>  
        </BrowserRouter>
 <div className={classes.AuthC}>
  
 </div>
      </div>
    

    )
  }
  componentDidMount()
  {
    this.props.localItems();
  }
}


const mapDispatchToProps=(dispatch)=>
{
  return{
   localItems:() => dispatch(localItemSent())
  }
}



export default  connect(null,mapDispatchToProps) (App);
