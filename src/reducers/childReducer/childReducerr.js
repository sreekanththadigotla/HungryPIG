
const initialState = {
    childElements:[],
    index:null,
    selectedChild:null,
    All:[],
    saveChildElements:[],
    orders:[],
    afterBuy:[],
    ordersNo:0,
    sucess:false,
    deleted:false,
    pending:false,
    deleteOrder:false
    
}

export const childReducer =(state=initialState,action)=>
{           console.log("-------------------",action)

    switch(action.type){
        case 'child':
            let newA=[];
            console.log("Child State is",action,state);
            if(state.orders.length>0)
            {
                for(let k in state.orders)
                {  console.log("First Loop",state.orders[k])
                       for(let kk in action.data)
                       {
                           console.log("Second Loop",action.data[kk])
                           if(state.orders[k].name==action.data[kk].name&&state.orders[k].index==action.data[kk].index)
                           {  console.log("third Loop",action.data[k])
                               console.log(action.data[kk]);
                                action.data[kk].times=state.orders[k].times;
                                console.log(action.data[kk])
                               
                               
                           } 
                       }
                }
            }

   
                  


            return {...state,childElements:[...action.data],saveChildElements:[...action.data],index:action.indexNo,afterBuy:[...action.data]};

        case 'childTest':
            console.log("Child Test state is",state);
            return state;
         
        case 'test':
             console.log("Testing ",state);
            return state;
         
        case 'pending':
            
        
            return {...state,pending:true};

        case 'add':
            console.log("Addition",action,state);
            console.log(state.saveChildElements[0].times)
            // console.log(state.saveChildElements[1].times)
            
             for(let k in state.orders)
             {   console.log(state.orders[k])
                 if(state.orders[k].name == action.data.name && state.orders[k].index == action.data.index)
                 {             

                     let First  = state.orders
                     console.log("First",First);
                     console.log("Addition",[...state.orders]);
                     
                     console.log(...state);
                     let Second = {...First[k]};
                     console.log("Second",Second);

                    //INCREASING THE TIMES   
                     Second.times = Second.times+1;
                     First[k] = Second;
                     console.log(First[k]);


                    let Arrs=[];
                    //FOR ALL ELEMENT
                     for(let childElement in state.childElements)
                     {  console.log("CHildish")
                      if(state.childElements[childElement].name == action.data.name && state.childElements[childElement].index == action.data.index)
                      {
                        let CFirst  = [...state.childElements]
                        console.log("First",CFirst);
        
                        let CSecond = {...CFirst[childElement]};
                        console.log("Second",CSecond);
        
                       //INCREASING THE TIMES   
                        CSecond.times = CSecond.times+1;
                        CFirst[childElement] = CSecond;
                        console.log(CFirst[childElement]);
        
        
                        console.log("CHHHHHHHHHHHHHHH")
                        // return {...state,childElements:CFirst};  
                        s(CFirst);
                        Arrs=[...CFirst];
                      }
                    }
                    //INSERTING INTO STORES
                    let f=[];
                     function s(CFirst){
                         console.log("ppppppppppppppppppppppppppppppppppppppppppppppppp",   )
                         console.log(CFirst);
                         f=[...CFirst];
                         console.log(f);
                        // return{...state,orders:[...First],childElements:CFirst}
                     }

                     console.log("Hi");
                    console.log(f);
                    console.log(Arrs);

                  

                    return{...state,orders:[...First],childElements:[...Arrs],saveChildElements:[...Arrs]}
                 }
                 console.log("Hi");
             }
             //For Orders 
             let Fir = {...action.data};
             console.log("FIR",Fir);
             Fir.times = Fir.times+1;

             let CCFirst  = [...state.childElements]
             console.log("First",CCFirst);

             let CCSecond = {...CCFirst[action.childIndex]};
             console.log("Second",CCSecond);

             
            //  console.log(state.saveChildElements[1].times)
             

            //INCREASING THE TIMES   
             CCSecond.times = CCSecond.times+1;
             console.log(state.saveChildElements[0].times)
             CCFirst[action.childIndex] = CCSecond;
             console.log(CCFirst);
             console.log(state.saveChildElements[0].times)

             
            console.log("HHHHHHHHHHHHHHH");
            console.log("Fs",Fir);
            console.log("Krish ",CCFirst);
            console.log("state",state)
            
            return {...state,orders:[...state.orders,Fir],childElements:[...CCFirst],saveChildElements:[...CCFirst]};    

        case 'sub':
            console.log("Subtraction",state,action,action.type.childIndex);
            console.log("ACTION ",action.data.times );
            console.log('ACtion Data',action.data);
            console.log("ACtion 3",action.data.times);
            console.log("ROGITNAL ",state.childElements);
            let flush = [...state.childElements];
            console.log("FLUSH  ",flush);
             if(state.childElements)
            {        console.log("Callling)")
                     console.log(state.childElements[action.childIndex].name );
                     console.log(action.data.name);
                     console.log(state.childElements[action.childIndex].index);
                     console.log(action.data.index);
                   if(state.childElements[action.childIndex].name === action.data.name && state.childElements[action.childIndex].index == action.data.index){
                           console.log("DATA IS",state.childElements[action.childIndex])
                         console.log(state.childElements[action.childIndex].times)
                         console.log(state.childElements[action.childIndex].times+1)
                         let one = [...state.childElements]
                         console.log("-------------")
                         console.log(one);
                         console.log("=============");
                         let two = {...one[action.childIndex]};
                         console.log("Sreeaction.childIndexanth",two);
                         two.times = two.times-1;

                         if(two.times<0)
                         {
                             two.times=0;
                             one[action.childIndex] = two;
                             return {...state,childElements:one};

                         }

                         one[action.childIndex] = {...two};

                         console.log("Sreekanth Reddy",one);

                         let TotalOrderss=0;
                         let TotalOrderr=[];
                       
                         let p = [...state.orders];
                         let newOrd = [];
                         let newss= [];
                         
                          for(let s in state.orders)
                          {   console.log(state.orders[s].name);
                            console.log(action.data.name);
                            console.log(state.orders[s].index);
                            console.log(action.data.index);

                             if(state.orders[s].name == action.data.name && state.orders[s].index == action.data.index)
                             {
                                 console.log("true");
 
                                 let f = [...state.orders];
                                 console.log("f ",f); 
                                 let ff = {...f[s]};
                                 console.log("ff",ff);
                                 console.log(ff.times)
                                 ff.times = ff.times-1;
                                 console.log("ff times",ff);
                                 f[s] = {...ff};
                                 console.log(f[s].times);
                                 let sd =s;
                                 if(f[s].times<=0)
                                 {    console.log("F",f);  
                                     console.log("S",sd);
                                        console.log("STATE",state.orders);     
                                      let ss = [];  
                                      for(let k in f)
                                      {console.log("sdf",f[k])
                                          if(f[k].times!==0) 
                                          { console.log("sdff",f[k])
                                              ss.push(state.orders[k])
                                          }

                                      }
                                     let pk = state.orders.slice(ss,1)
                                      console.log("pk",ss); 
                                      newss = [...ss]

                                      return {...state,childElements:[...one],ordersNo:TotalOrderss,orders:[...newss]};

                                 }
                                 
                                 console.log("f ",f);
                                newOrd = f;   
                                console.log("sdf", newOrd);
                             }
                          }

                         console.log("ssssssssss",one)
                         console.log("New ",newOrd)  

                         return {...state,childElements:[...one],ordersNo:TotalOrderss,orders:[...newOrd]};
                       }


                    
                
            }
            

           return {...state,All:state.All.concat(action.data)};    



           case 'filter':
                 console.log("FILTERED VALUE IS",action);
                 console.log("STATE is ",state);
                 if(action.data === "All")
                 {
                     return{...state,childElements:[...state.saveChildElements]}
                 }
                 console.log("Saved Child Elements",state.saveChildElements);
                  let newSelectedChild = state.saveChildElements.filter(obj => obj.type===action.data);
                  console.log(newSelectedChild)
                     
                return {...state,childElements:newSelectedChild};

           case 'sendOrders':
                console.log("Got Value as",action.type,action.valid);

                if(action.valid == 'sucess')
                {
                      return {...state,sucess:true,pending:false,orders:[],childElements:[...state.afterBuy],saveChildElements:[...state.afterBuy]}
                }    

                return {...state,sucess:false,pending:false};

            case 'deleteOrder':
                 console.log("Delete Orders" ,action.data)
                //  deleteOrder
                 if(action.data == 'deleted')
                 {
                    return {...state,pending:false,deleteOrder:false};

                 }
               return {...state};

             
            case 'deletePending':

                return {...state,deleteOrder:true};

             
            case 'Zeroo':
                    console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ")  
                 let  First = [...state.childElements]; 
                 let newFirst = [];
                  for(let obj of First)
                 {
                     
                    if(obj.times!==0)
                    {
                        obj.times=0
                    }
                    newFirst.push(obj)
                 }

                 console.log(newFirst)
                
                 let Second = [...state.orders]
                 let newSecond = [];
                 for(let order of Second )
                 {
                     if(order.times!==0)
                     {
                         order.times=0
                     }

                     newSecond.push(order)

                 }

               console.log(newSecond);

               return {...state,childElement:[...newFirst],childElements:[...newFirst],afterBuy:[...newFirst],orders:[]};
 

        default:
           return state;
    }
}