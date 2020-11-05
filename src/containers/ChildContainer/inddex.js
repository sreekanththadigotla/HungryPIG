//Functions to the index.js
const  functions = require('firebase-functions');

//npm i express
//npm i cors
const express = require('express');
const cors = require("cors");

const stripe = require('stripe')('sk_test_51HcZKLHrUof7TtLv5gvTjwFfczBhwGxhvFXM9XkdSnIuMGxVuJUuKz1nRFMrEOjpNnwX0ieo972iMfIgsitDtGgU00FBsS6VsQ')


//API

//App Config
const app = express();

//MiddleWare
app.use(cors({origin:true}))
app.use(express.json())

//API routing
app.get('/',(request,response)=> response.status(200).send('hello world'));


app.post('/payments/create', async(request,response)=>{
    const total = request.query.total;
    console.log('Payment request received for this amount',total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount:total,
        currency:"usd"

    });


    //Ok- Created
      response.status(200).send({
          clientSecret:paymentIntent.client_secret
      })

})

//Listen  command
exports.api = functions.https.onRequest({app})



// after listen commandfirebase emulators?start  => It will turn popup as  gives a function click on get the logs and also gives url as 
//end point as the baseURL