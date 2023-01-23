const express = require("express")
const app = express()
const path = require("path")

let port = 5000

app.use((req,res,next)=>{
    const time = new Date()
    const day = time.getDay()
    const hour = time.getHours()
    
    if(day>=1 && day<=5 && hour>=9 && hour<=17){
        
        next()
    }else{
        res.sendFile(path.join(__dirname,'./pages/closed.html'))
    }
})



app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'./pages/home.html'),(error)=>{
        console.log('cannot get the file')
    })
})
app.get("/ourServices",(req,res)=>{
    res.sendFile(path.join(__dirname,'./pages/ourServices.html'),(error)=>{
        console.log('cannot get the file')
    })
})
app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,'./pages/contact.html'),(error)=>{
        console.log('cannot get the file')
    })
})

app.listen(port, (error)=>{
    if(error){
        console.log("Something went wrong")
    }else{
        console.log("Server Running on ", port)
    }
})