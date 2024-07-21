let express=require("express")
let {dbConnection}=require("./database/db.js")
let bodyParser=require("body-parser")
let personRouter=require("./router/personRoutes.js")
let dotEnv=require("dotenv")

dotEnv.config()

let app=express()

app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended:"true"}))

app.use("/people",personRouter)

dbConnection()

app.get("/",(req,res,next)=>{
    res.json({
        message:"hello world"
    })
})
app.get("/user/:username/:id",(req,res,next)=>{

   let { username,id}=req.params

    res.json({
        message:"hello world",
        user:username,
        id:id
    })
})




app.listen(process.env.PORT,()=>{
    console.log("server is on")
})

