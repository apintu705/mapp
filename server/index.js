const express=require('express');
const {connect}=require("./database/db")
require("dotenv").config()
const app = express();
app.use(express.json());


const router=require("./routes/routes")
app.use("/",router);


const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    connect();
    console.log(`listening on port ${PORT}`);
})


