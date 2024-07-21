let mongoose=require("mongoose")

let dbConnection=async ()=>{
    try {
        await mongoose.connect(`${process.env.DB_URL}/hotels`)
        console.log("database is connected")
    } catch (error) {
        console.log(`database connection error : ${error}`)
    }
}


module.exports.dbConnection=dbConnection
