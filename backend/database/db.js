const  mongoose= require("mongoose")

const connectDB=async()=>{
    try{
        console.log(process.env.MONGO_URI)
    await mongoose.connect(`${process.env.MONGO_URI}`)
    console.log('mongodb connected successfully')
    }
    catch(e){
   console.log(`MongoDB connection error${e.message}`)
    }
}


module.exports=connectDB