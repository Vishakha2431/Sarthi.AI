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

// const allowedOrigins = [
//   process.env.FRONTEND_URL,
//   "http://localhost:5173",
//   "http://localhost:5174",
//   "http://localhost:5175",
//   "http://localhost:3000"
// ];

app.use(cors({
  origin: [
    process.env.FRONTEND_URL,
    "http://localhost:5173"
  ],
  credentials: true
}));

const PORT=process.env.PORT || 8000

app.use('/api/auth',authRoute)
app.use('/api/website',websiteRoute)
 connectDB()

app.listen(PORT,()=>{
   
    console.log(`Server is listening at port: ${PORT}`)
})