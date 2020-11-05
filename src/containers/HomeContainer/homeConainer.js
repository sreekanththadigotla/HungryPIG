import React from 'react';
import { connect } from 'react-redux';
import Home from '../../components/Home/home';

class HomeContainer extends React.Component{

    render()
    {
         console.log(this.props.data)


        return(
            <Home properties={this.props.data}/>
        )
    }
}

const mapStateToProps = (store) => {
    return {
       
        data:store.child.childElements
    
  };
}
  
  const mapDispatchToProps = (dispatch) => {
    return {

    };
}
  
export default connect(mapStateToProps,mapDispatchToProps) (HomeContainer);