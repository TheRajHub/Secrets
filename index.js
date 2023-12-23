import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
const _dirname=dirname(fileURLToPath(import.meta.url));
const app=express();

app.use(express.urlencoded({extended: true}));
var t=false;
app.use((req,res,next)=>{
    if(req.body["password"]=="R"){
        t=true;
    }
    next();
});

app.post("/l",(req,res)=>{
    if(t){
        res.sendFile(_dirname+"\\secret.html");
    }
    else{
        res.redirect("/");
    }
});


app.get("/",(req,res)=>{
    res.sendFile(_dirname +"\\index.html");
    
});

app.listen(3000,()=>{
    console.log("Running...");
    
});