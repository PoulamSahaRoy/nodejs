let fs=require("fs")
let os=require("os")
let axios=require("axios")
const { response } = require("express")

let user=os.userInfo()
console.log(user.username)

fs.appendFile("greetin.txt",`hi ${user.username}\n`,()=>{
    console.log("file is created")
})

function add(a,b,call){
 let result=a+b
 console.log(result)
 call()
}

add(7,9,()=>{
    console.log("hello world")
})

// axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
//     console.log(response.data)
// })

let ans=["harry",12,4,"polo"].filter((elem)=>{
    return typeof elem==="string"
})
console.log(ans)

// JSON.parse //converts json to obj
//JSON.stringify() // converts obj to json

let obj={
    name:"harsh",
    age:23
}

