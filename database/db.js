let mongoose=require("mongoose")

let dbConnection=async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/hotels")
        console.log("database is connected")
    } catch (error) {
        console.log(`database connection error : ${error}`)
    }
}


module.exports.dbConnection=dbConnection
