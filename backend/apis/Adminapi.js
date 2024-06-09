//create author api app
const exp = require('express');
const adminApp = exp.Router();
const expressAsyncHandler = require('express-async-handler')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const VerifyToken = require("../Middlewares/VerifyToken");


let admincollection;
let staffcollection;

// let articlescollection;
//get usercollection app
adminApp.use((req, res, next) => {
    admincollection = req.app.get('admincollection');
    staffcollection = req.app.get("staffcollection");
    // articlescollection = req.app.get('articlescollection')
    next()
})



//user registration route
adminApp.post(
    "/user",
    expressAsyncHandler(async (req, res) => {
        //get user resource from client
        const newUser = req.body;
        //check for duplicate user based on username
        const dbuser = await staffcollection.findOne({ username: newUser.username });
        //if user found in db
        if (dbuser !== null) {
            res.send({ message: "User existed" });
        } else {
            //hash the password
            const hashedPassword = await bcryptjs.hash(newUser.password, 6);
            //replace plain pw with hashed pw
            newUser.password = hashedPassword;
            //create user
            await staffcollection.insertOne(newUser);
            //send res
            res.send({ message: "User created" });
        }
    })
);

adminApp.post(
    "/admin",
    expressAsyncHandler(async (req, res) => {
        //get user resource from client
        const newUser = req.body;
        //check for duplicate user based on username
        const dbuser = await admincollection.findOne({ username: newUser.username });
        //if user found in db
        if (dbuser !== null) {
            res.send({ message: "User existed" });
        } else {
            //hash the password
            const hashedPassword = await bcryptjs.hash(newUser.password, 6);
            //replace plain pw with hashed pw
            newUser.password = hashedPassword;
            //create user
            await admincollection.insertOne(newUser);
            //send res
            res.send({ message: "User created" });
        }
    })
);


//author login
adminApp.post('/login', expressAsyncHandler(async (req, res) => {
    //get cred obj from client
    const userCred = req.body;
    //check for username
    const dbuser = await admincollection.findOne({ username: userCred.username })
    if (dbuser === null) {
        res.send({ message: "Invalid username" })
    } else {
        //check for password
        const status = await bcryptjs.compare(userCred.password, dbuser.password)
        if (status === false) {
            res.send({ message: "Invalid password" })
        } else {
            //create jwt token and encode it
            const signedToken = jwt.sign({ username: dbuser.username }, process.env.SECRET_KEY, { expiresIn: '1d' })
            //send res
            res.send({ message: "login success", token: signedToken, user: dbuser })
        }
    }
}))











    
  
//export userApp
module.exports = adminApp;



