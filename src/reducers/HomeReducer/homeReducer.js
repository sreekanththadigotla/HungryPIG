 

let initialState = {
  counter:0,
  homeData:[],
  searchData:[],
  totalOrders:[]
   
}

const homeReducer = (state = initialState,action)=>
{
    switch(action.type)
    {
        case 'HomeData':
              console.log("Fethced", action.data)
        
             return  {...state,homeData:[...action.data]}             


        case 'as':
            console.log("-------------------");
            console.log(state)
             return {...state}
        case 'nuls':
           return{...state,searchData:[]}

             
        case 'search':
            console.log("-------------------");
            console.log(state)
            return {...state,searchData:[...action.data] }     
            

        case 'keyFind':
          console.log("In the reducer",action.data);
            let  newStat = {...state,homeData:[]}

             return {...newStat,homeData:{...action.data}};        
        
  

        case 'filterData':
             console.log("FFFFFFFFFFFFFFFFFFFFFFF",action.value)
             
            let newState = {...state,homeData:[]}

            return {...newState,homeData:{...action.value}};
        
        case 'TotalOrders':
             console.log("Total Results are ", action.data);    

             return {...state,totalOrders:[...action.data]};
             
        default :
             return state;
    }
}

export default homeReducer;