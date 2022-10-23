const axios=require("axios");
const express=require("express");

const PORT=5000;

const app=express();

app.listen(PORT,()=>{
  console.log(`running this app on port ${PORT}`)
})



let array;
axios.get('https://open.er-api.com/v6/latest/USD').then((res)=>{
  array=res.data
  
  
}).catch((err)=>{
console.log(err)
})

app.get("/usd",(req,res)=>{
  res.json(array);
  
});