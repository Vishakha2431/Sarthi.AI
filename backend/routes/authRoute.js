const express=require("express");
const {googleAuth,logoutUser}=require("../controllers/authcontroler")
const app=express();
const router=express.Router()

router.post('/google',googleAuth)
router.get('/logout',logoutUser)


module.exports=router