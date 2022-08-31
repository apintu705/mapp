const express=require('express');
var cors = require('cors')
var bodyParser = require('body-parser')
const cookieparser=require("cookie-parser")
const {connect}=require("./database/db")
require("dotenv").config()
const app = express();

app.use(express.json());
app.use(cors())
app.use(cookieparser())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

const router=require("./routes/routes")
app.use("/",router);

app.get("/",(req,res)=>{res.send("hi")})

const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    connect();
    console.log(`listening on port ${PORT}`);
})


