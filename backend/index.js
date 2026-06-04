const express=require("express");
const dotenv=require('dotenv');
const connectDB = require("./database/db.js");
const authRoute=require("./routes/authRoute.js");
const websiteRoute=require("./routes/websiteRoute.js");
const cors= require("cors")
const cookieParser = require("cookie-parser");
dotenv.config()
const app=express();


//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

const PORT=process.env.PORT || 8000

app.use('/api/auth',authRoute)
app.use('/api/website',websiteRoute)
 connectDB()

app.listen(PORT,()=>{
   
    console.log(`Server is listening at port: ${PORT}`)
})