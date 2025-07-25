const express=require('express');
const app=express();

// app.use('/',(req,res)=>{
//     res.send("hello home")
// })

app.use('/user/:Id/:password/:name',(req,res)=>{
    res.send('hello user')
console.log('handling user request',req.params);

})

// app.use('/user/data',(req,res)=>{
//     res.send("hello data")
// })


// app.use('/',(req,res)=>{
//     res.send("hello home")
// })

app.listen(3000,()=>{
    console.log('server is running')
});

