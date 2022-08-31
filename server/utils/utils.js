const jwt = require('jsonwebtoken');
require("dotenv").config();



exports.generateToken=(user)=>{
    
    return jwt.sign({
        _id:user._id,
        name:user.name,
        username:user.username},
        process.env.JWT_SECRET,{
        expiresIn:"30d"
    })
};


exports.isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.slice(7, authorization.length);
      jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = decode;
          next();
        }
      });
    } else {
      res.status(401).send({ message: 'No Token' });
    }
};