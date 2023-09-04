const jwt = require("jsonwebtoken")

const authentication = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    if(!token){
        return res.send({msg : "Please login first"})
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err){
            return res.send({msg : "Please login first"})
        }
        else{
            console.log(decoded)
            const {userID} = decoded
            req.userID = userID;
            next()
        }
    })
}

module.exports = {authentication}