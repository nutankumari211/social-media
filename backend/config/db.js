const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://nutankumari211:nutan%40123%40@cluster0.pmxpstx.mongodb.net/mysocialdb?retryWrites=true&w=majority',{
    useNewUrlParser:true,
  
})

const db=mongoose.connection;

db.on('error',console.error.bind(console,"mongodb connection error"));

db.once('open',()=>{
    console.log('connected to mongodb');
})


module.exports=db;