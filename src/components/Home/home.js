import React from "react";
import classes from "./home.css";
import ReactDOM from 'react-dom';

import { FaStar } from "react-icons/fa";

import { connect } from "react-redux";
import  { fetch, filterData, getOrderss, keyFindd, search } from "../../Actions/HomeAction/homeAction";
 
import { childGet } from "../../Actions/ChildComp/childComp";

import { GiPig } from "react-icons/gi";
import AuthContainer from '../../containers/AuthContainer/authContaine';
 
import bb from "../../Images/bb-min.jpg";
import bb3 from  "../../Images/bb3.min.webp";
import bb4 from "../../Images/bb4-min.webp";


import { BsAlarm,BsFillPeopleFill,BsHouseFill  } from "react-icons/bs";
import { FaDrumstickBite,FaPizzaSlice,FaCarrot,FaQuoteLeft,FaGofore,FaTwitter,FaFacebookF } from "react-icons/fa";

 
import user1 from '../../Images/user1.webp';
import user2 from '../../Images/user2.webp';
import user3 from '../../Images/user3.webp';
import user4 from '../../Images/user4.webp';

import f3 from '../../Images/f3-min.webp';
import gal from '../../Images/gal-2-min.webp';
import hd1 from '../../Images/hd1-min.webp';
import hd2 from '../../Images/hd2-min.webp';
import hd3 from '../../Images/hd3-min.webp';
 import hd5 from '../../Images/hd5-min.webp';
import hd6 from '../../Images/wait4-min.webp';
 
import b4 from  '../../Images/b4-min.webp'
import p1 from '../../Images/p1-min.webp';
import p2 from '../../Images/p2-min.webp';
 
import p4 from '../../Images/p4-min.webp';
 

import nn from '../../Images/second-min.webp';

import p from '../../Images/ppl-min.webp';
 
import {  withRouter } from "react-router-dom";
import { logout } from "../../Actions/AuthAction/authAction";
 





  
class Home extends React.Component {
  state = {
    FetchedData: [],    
    searchElement: null,
    searchHalfElement:"",
    i:0,
    FilterArea:null,
    orders:"orders",
    username:"sreekanth"
  };

  constructor(props) {
    super(props);
    this.tims = undefined;
    this.sse = null;
    this.searchRef = React.createRef();
    this.sample = ["All","veg", "Non-veg"];
    // this.inputRef=React.createRef();
    this.filterRef=React.createRef();
    this.ii= 0;
    this.check=false;
    this.ord =0;
    this.ImagesArray = [bb,bb3,bb4];
    this.AuthRef = React.createRef();
    this.inputReff = React.createRef();
     this.orderRef = React.createRef();
    
  }

  search = (event) => {
    event.persist();
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    console.log(event.target.value.length);
    console.log(this.tims);
    this.props.nullify();
    if (this.time !== undefined) {
      clearTimeout(this.time);
    }

    event.target.value.length > 0
      ? (this.searchRef.current.style.display = "block")
      : (this.searchRef.current.style.display = "none");

    this.time = setTimeout(() => {
      console.log("http calling");
      console.log(this.props.search(event.target.value));
    }, 500);
  };

  filterFunction = (event) => {
    event.persist()
    console.log(event);
    console.log(event.target.getAttribute("value"));
    this.props.filterD(event.target.getAttribute("value"),this.state.FilterArea);
    console.log(event.target.value);
  };


  ord= () =>
  {     console.log("clicking")
  }
  inputKeep=()=>
  { 
     console.log("get Data",this.state.searchHalfElement)
     this.inputRef.current.value=this.state.searchHalfElement;
  }



//Filter show
  filterShow=(event)=>
  {
     event.persist()
     console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
     console.log(event)
     console.log(event.target)
    
     this.setState({searchHalfElement:event.target.getAttribute("value")},()=>this.inputKeep())
     console.log(event.target.getAttribute("value"))
  }


  keySolve=(event)=>
  {
    if(event.keyCode===13)
    {
      this.props.keySearch(this.inputRef.current.value);
    }

    if(event.keyCode===40)
    {   
      if(this.check)
      {
        ++this.ii;
      }
      ++this.ii;
      console.log(this.ii-1)
     let inputValue= this.props.searched[this.ii-1];

     if(inputValue===undefined)
     {
       this.ii=0;
       console.log(this.props.searched[this.ii])
       inputValue= this.props.searched[this.ii];
       
     }
      this.inputRef.current.value=inputValue;
      

      
    }
    
    if(event.keyCode===38)
    {  
      this.check=true;
      --this.ii;
      --this.ii;
      console.log(this.ii)
     
      let inputValue= this.props.searched[this.ii];
      if(inputValue===undefined || this.ii<0)
      {
        this.ii=0;
        console.log(this.props.searched[this.ii])
        inputValue= this.props.searched[this.ii];
        
      }
     
     
      this.inputRef.current.value=inputValue;
       
       
      
    }

    
  }
  logout=()=>
  {
       if(!this.props.userId)
       {
     return   this.AuthRef.current.scrollIntoView({
               behavior: 'smooth',
               block: 'center',
               inline: 'center',
            });
       } 

  
    console.log("Logut");
    this.props.logout();
  }
 

  selectOption=(event)=>
    {
      console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
      console.log(event.target.value);
      if(event.target.value==="Area")
      {
        this.setState({FilterArea:null},()=>console.log("value is ",this.state.FilterArea))

        return
      }
      this.setState({FilterArea:event.target.value},()=>console.log("value is ",this.state.FilterArea))
      this.props.keySearch(event.target.value)
    }
  
    subsribe = () =>
    {  console.log(this.inputReff)
      this.inputReff.current.value=""
    }

  //From To Child
    cardClick=(event)=>
    {
      console.log(event)
      // console.log(event.target.getAttribute("value"))
      // console.log(event.target.value)
      //  this.props.getChild(event.target.getAttribute("value"));
       if(event!==null){

        this.props.history.push("/child/"+event)
       }
        

      }

      getAllOrders = () =>
      {
        this.props.getOrders();
        this.props.history.push('/orders');
      }

      forOrder = () =>
      {  console.log("Calling")
        this.orderRef.current.scrollIntoView({behavior:'smooth'})
      }

  render() {

    let b = null;
    console.log("AAAAAAAAAAAAAAAAAAAAAAAA");
    console.log(this.state.hz);
    console.log([...new Set(this.state.hz)]);
    console.log(this.props);
    console.log(this.props.name.length);
    Object.entries(this.props.name).forEach(([key, value], i) =>
      console.log(key, value.area)
    );
    console.log("--------------------------------");
    Object.keys(this.props.name).forEach((key) => this.props.name[key]);
    console.log("vachindhi");
    console.log(this.props.name)
    if (Object.keys(this.props.name).length > 0) {
      let position = -1;
      b = Object.entries(this.props.name).map(([key, data]) => {
          position++;
        //------------------------------CARD---------------------------------
     return   <div key={data.name} className={classes.cardlo}   value={data.id} onClick={()=>this.cardClick(data.id)}>
          <img className={classes.Images} alt="images" src={this.ImagesArray[0]}>
      
            
          </img>
          {/* <span className={classes.hello}></span> */}

          <div className={classes.address} >
            <div className={classes.name}>{data.name}<span className={classes.afterName}>({data.type})</span></div>
            <div className={classes.rating}>
              {" "}
              <FaStar className={classes.star} /> {data.rating}/5{" "}
              <span className={classes.totalrating}>({data.totalrating})</span>
            </div>
            {/* <div className={classes.pricce}>Rs:{data.price}/-</div> */}
            <div className={classes.area}>{data.area},</div>
            <div className={classes.city}>{data.city}</div>
          </div>
         
         </div>
         
      });
    }


    console.log(localStorage.getItem("userid"))

    return (

      
      
      
      <div className={classes.aut}>
           <div className={classes.wrap}>
          
             <div className={classes.loginUser}>
                <span className={classes.word}>{this.props.userId &&  this.props.emaiId  }</span>  
                
                <span className={classes.word} onClick={this.getAllOrders} >{this.props.userId && this.state.orders}</span>
                <span className={classes.word} onClick={()=>this.logout()}>{this.props.userId  ? "logout" : "login"}</span>
 
              </div>
         
         <div className={classes.anotherWrap}>

         <h1 className={classes.FirstHeading}  >The  
             <div className={classes.FirstHeadingS}>hungry
             <span className={classes.hungry}>
             <GiPig className={classes.PIG}/> <span className={classes.ss}></span>
               </span>
              
                </div>
                {/* <div className={classes.Order} onClick={this.forOrder} >Order</div> */}

              </h1>

             <div className={classes.FirstHeadingss}>
             
               <span className={classes.Branches} onClick={this.forOrder} >marathalli</span>
               <span className={classes.Branches} onClick={this.forOrder} >BTM</span>
               <span className={classes.Branches} onClick={this.forOrder} >Majestic</span>
             </div>
           </div>
          
             <span className={classes.wrapSpan}></span>
           </div>

           <div className={classes.bab}>  
    
      <div className={classes.Who}> Who ? </div>
       <p className={classes.paraAbout}>Just me, myself and I, exploring the universe of unknownment. I have a heart of love 
        and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.
         Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, 
        .</p>
      </div>

           <div className={classes.about}>
             
             <div className={classes.subAbout}>
             
               <BsAlarm className={classes.icon}></BsAlarm>
      

               <p className={classes.iconheading}>
                  Time
               </p>
               <p className={classes.icondescription}>
                  properly followed learning prepared you doubtful yet him. Over many our good lady feet ask that.
               </p>
              
             </div>

            <div className={classes.subAbout}>
             
               <BsFillPeopleFill className={classes.icon}></BsFillPeopleFill>
      

               <p className={classes.iconheading}>
                  Customers
               </p>
               <p className={classes.icondescription}>
                 because are account evident its subject but eat. Can  many our good lady feet ask that.
               </p>
              
             </div>
             


{/*              
import { BsAlarm,BsFillPeopleFill,BsHouseFill  } from "react-icons/bs";
import { FaDrumstickBite,FaPizzaSlice,AiTwotonePhone  */}

            <div className={classes.subAbout}>
             
               <BsHouseFill className={classes.icon}></BsHouseFill>
      

               <p className={classes.iconheading}>
                  Delivery
               </p>
               <p className={classes.icondescription}>
                 Two exquisite objection delighted deficient yet its contained.  doubtful yet him.   many our good lady feet ask that.
               </p>
              
             </div>

            <div className={classes.subAbout}>
             
               <FaDrumstickBite className={classes.icon}></FaDrumstickBite>
      

               <p className={classes.iconheading}>
                  Non-Veg
               </p>
               <p className={classes.icondescription}>
                  . Can properly followed learning prepared you doubtful yet him. Over many our good lady feet ask that.
               </p>
              
             </div>

            <div className={classes.subAbout}>
             
               <FaPizzaSlice className={classes.icon}></FaPizzaSlice>
      

               <p className={classes.iconheading}>
                  Pizza
               </p>
               <p className={classes.icondescription}>
               dial because are account evident its subject but eat. Can properly followed learning prepared you doubtful yet him.  
               </p>
              
             </div>

            <div className={classes.subAbout}>
             
               <FaCarrot className={classes.icon}></FaCarrot>
      

               <p className={classes.iconheading}>
                  VEG
               </p>
               <p className={classes.icondescription}>
          delighted d  Can properly followed learning prepared you doubtful yet him. Over many our good lady feet ask that.
               </p>
              
             </div>
           
           </div>


          <div className={classes.Gallery}>
            
            <figure className={classes.figures1}>

               <img src={p2} loading="lazy" alt="image1" className={classes.imag}></img>
            </figure>

            <figure className={classes.figures2}>
               <img src={p1} loading="lazy" alt="image1" className={classes.imag}></img>
           </figure>

           <figure className={classes.figures3}>
               <img src={f3} loading="lazy" alt="image1" className={classes.imag}></img>
           </figure>

           <figure className={classes.figures4}>
               <img src={gal} loading="lazy" alt="image1" className={classes.imag}></img>
           </figure>


           <figure className={classes.figures5}>
               <img src={hd1} loading="lazy" alt="image1" className={classes.imag}></img>
           </figure>


           <figure className={classes.figures6}>
               <img src={hd2} loading="lazy" alt="image1" className={classes.imag}></img>
           </figure>


           <figure className={classes.figures7}>
               <img src={hd3} loading="lazy" alt="image1" className={classes.imag}></img>
           </figure>


           <figure className={classes.figures8}>
               <img src={b4} loading="lazy" alt="image1" className={classes.imag}></img>
           </figure>


           <figure className={classes.figures9}>
               <img src={hd5} loading="lazy" alt="image1" className={classes.imag}></img>
           </figure>

           <figure className={classes.figures10}>
               <img src={hd6} loading="lazy" alt="image1" className={classes.imag}></img>
           </figure>
 
           {/* <figure className={classes.figures11}>
               <img src={p3} loading="lazy" alt="image1" className={classes.imag}></img>
           </figure> */}

           <figure className={classes.figures12}>
               <img src={p4} loading="lazy" alt="image1" className={classes.imag}></img>
           </figure> 

           {/* <figure className={classes.figures13}>
               <img src={p5} loading="lazy" alt="image1" className={classes.imag}></img>
           </figure> */}

           <figure className={classes.figures14}>
               <img src={nn} loading="lazy" alt="image1" className={classes.imag}></img>
           </figure>  

           {/* <figure className={classes.figures15}>
               <img src={pp} loading="lazy" alt="image1" className={classes.imag}></img>
           </figure> */}

           { <figure className={classes.figures16}>
               <img src={p} loading="lazy" alt="image1" className={classes.imag}></img>
           </figure>


         }



            
           
         </div>  
 

         {/* // ----------SEARCH INPUT------------- */}
        {/* <div className={classes.showinput}> */}
          {/* <input
            type="text"
            className={classes.inputs}
            onChange={this.search}
            onKeyUp={this.keySolve}
            placeholder="search by area"
            ref={this.inputRef}
          ></input> */}
          {/* <div className={classes.show} ref={this.searchRef} onClick={this.filterShow}>
            {
        //--------------- BelowSearch------------------
                ((this.sse = null),
                this.props.searched.map((data, i) => {
                  return (this.sse = (<div key={Math.random()} value={data} className={classes.seart}>
                                           {data}
                                     </div>
                  ));
                }))
              }
          </div> */}
        {/* </div> */}

{/* -----------------------FILTER----------------------- */}
        {/* <div */}
          {/* className={classes.filterData} */}
          {/* onClick={ this.filterFunction} */}
        {/* > */}
          {/* {this.sample.map((data, index) => {
            return (
              <span className={classes.filters} value={data}>
                {data}
              </span>
              
            );
          })} */}
          {/* <select name="area" id="area" onChange={this.selectOption} >
          <option value="Area">Area</option>
          <option value="marathalli">marathalli</option>
          <option value="btm">BTM</option>
          <option value="majestic">majestic</option>
        </select> */}
        {/* </div> */}
        {/* <label>Select Area</label> */}
        {/* <div> */}

       {/* <button onClick={this.props.test}> </button> */}
        {/* </div> */}
       
        {/* <HeadSearch filterData={["veg", "nonveg"]}></HeadSearch> */}
        {/* <h3>Sreekanth</h3> */}

        {/* <button onClick={this.props.dat}>clickme</button> */}

        <div className={classes.Card} ref={this.orderRef}>{b}</div>
  
      {/* <div>Total no of orders {this.props.ordersNo}</div> */}

 

      <div className={classes.authCenter} ref={this.AuthRef}>
              
              <div className={classes.authSide} >

               
                <p className={classes.Pas}>RECEIVE GOOD FOOD
AND HIGH QUALITY SERVICE</p>
</div>

           <AuthContainer  className={classes.authsAbsolute}></AuthContainer>


    </div>

    <div className={classes.testimonals}>
             
             <div className={classes.testimonalborder}>
                <div className={classes.testimonalCard}>
                {/* Testimonall1 */}
                  <span className={classes.quotes}>
                    <span className={classes.quott}></span>
                  I Stumbled On This Undiscovered Gem Right In Our Neighboorhood. The Food Was Flavorful, Savory, And Succulent And Good Waiter's
                  </span>
                 {/* image1 */}

                  <div className={classes.belowQuote}>
                    <p className={classes.Nameee}>--- Daniel</p>
                    <img src={user1} alt="user1" className={classes.qqimage}></img>
                  </div>
                
            

                </div>
             </div>

             <div className={classes.testimonalborder}>
                <div className={classes.testimonalCard}>
                {/* Testimonall1 */}
                  <span className={classes.quotes}>
                    <span className={classes.quott}></span>
                    Yumm-O! The Food Was Cooked To Perfection. The Decor Was Unique And Incredible. After My Meal, I Was Knocked Into A Food Coma                                 </span>
                 {/* image1 */}

                  <div className={classes.belowQuote}>
                    <p className={classes.Nameee}>--- John</p>
                    <img src={user2} alt="user1" className={classes.qqimage}></img>
                  </div>
                
            

                </div>
             </div>



              <div className={classes.testimonalborder}>
                <div className={classes.testimonalCard}>
                {/* Testimonall1 */}
                  <span className={classes.quotes}>
                    <span className={classes.quott}></span>
                    It Was Much Better Than I Expected. The Food Was Cooked To Perfection. The Waiter Was Prompt And Polite.                                  </span>
                 {/* image1 */}

                  <div className={classes.belowQuote}>
                    <p className={classes.Nameee}>--- Lara</p>
                    <img src={user3} alt="user1" className={classes.qqimage}></img>
                  </div>
                
            

                </div>
             </div>


             <div className={classes.testimonalborder}>
                <div className={classes.testimonalCard}>
                {/* Testimonall1 */}
                  <span className={classes.quotes}>
                    <span className={classes.quott}></span>
                    Best Experience Ever! The Experience Was Heavenly As I Was Served A Meal Fit For God Himself. Everything I Tried Was Bursting With Flavor.                  </span>
                 {/* image1 */}

                  <div className={classes.belowQuote}>
                    <p className={classes.Nameee}>--- Emma</p>
                    <img src={user4} alt="user1" className={classes.qqimage}></img>
                  </div>
                
            

                </div>
             </div>


            
        </div>

      

 
    <footer className={classes.footer}>
      <div className={classes.leftFooter}>

      <GiPig className={classes.FOOTERPIG}/>  
      <span className={classes.abouts}>The dark background is nice-looking matching with the white copy. 
      It has the basics like logo, about us section, contact info section, social icons, but not any links
      It has the basics like logo, about us section, contact info section, social icons, but not any link 
      contact info section, social icons, but not any link 
      to secondary pages or anywhere else
      </span>

      </div>
   
        <div className={classes.rightFooter}>
          <div className={classes.rightTop}>

          <span className={classes.Letter}>News Letter</span>
          <input className={classes.Emails}  ref={this.inputReff} placeholder="Email"></input>
             <button className={classes.subsribe} onClick={this.subsribe}>Subscribe</button>  

          </div>
            
         
           <div className={classes.copy}>
                      <div className={classes.users} >
            
            <span ><FaGofore className={classes.fo} ></FaGofore> </span>
            <span ><FaTwitter className={classes.fo}></FaTwitter>  </span>
            <span ><FaFacebookF className={classes.fo}></FaFacebookF> </span>
            </div>


             <div className={classes.addresss}>BTM Layout, 2st Floor,Bangalore City,INDIA.</div>
            <div className={classes.contact}>  Contact : +91 8281345686 | Sree@example.com</div>        
             <div  className={classes.copyRights}>© 2020 hungry pig. All Rights Reserved | Design by Sreekanth</div>
             </div>
          </div>
           
                            
    </footer>




       </div>

       
     

    );
  }

  componentDidMount() {
    if(this.props.name.length===0)
    {
      this.props.fetchData();

    }
    // this.searchRef.current.focus();
    // this.inputRef.current.focus();
       this.AuthRef.current.focus();
      //  this.props.getChild();
      this.orderRef.current.focus();
  }
}

const mapStateToProps = (store) => {
  return {
    counter: store.home.counter,
    name: store.home.homeData,
    searched: [...new Set(store.home.searchData)],
    ordersNo:store.child.ordersNo,
    userId:store.auth.userId,
    emaiId:store.auth.email
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetch()),
    dat: () => dispatch({ type: "as" }),
    nullify: () => dispatch({ type: "nuls" }),
    search: (searchData) => dispatch(search(searchData)),
    filterD:(val,filterArea) => dispatch(filterData(val,filterArea)),
    keySearch:(keyord) => dispatch(keyFindd(keyord)),
    test : () => dispatch({type:'test'}),
    //Child Comp
    getChild:(value) => dispatch(childGet(value)),
    getOrders:() => dispatch(getOrderss()),
    logout:() => dispatch(logout())
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)( withRouter(Home));
