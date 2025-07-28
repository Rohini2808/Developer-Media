// const express=require('express');
// const app=express();

// app.use('/',(req,res)=>{
//     res.send("hello home")
// })

// app.use('/user/:Id/:password/:name',(req,res)=>{
//     res.send('hello user')
// console.log('handling user request',req.params);

// })

// app.use('/user/data',(req,res)=>{
//     res.send("hello data")
// })


// app.use('/',(req,res)=>{
//     res.send("hello home")
// })

// app.listen(3000,()=>{
//     console.log('server is running')
// });



 const express=require('express');
const app=express();
const userAuth=require('./middlewares/user')
const dataAuth=require('./middlewares/data')
const adminAuth=require('./middlewares/adminAuth')

// app.use('/signup',userAuth,
// (req,res)=>{
// res.status(200).send("login successful")
// })


// app.use('/login',dataAuth,
//     (req,res)=>{
//         res.send('login successful')
//     }
// )

// app.use('/admin',adminAuth,(req,res)=>{
//     res.status(200).send("password correct")
// })

app.listen(3000,()=>{
    console.log('server is running')
});