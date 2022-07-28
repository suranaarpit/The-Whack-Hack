const {Router}  =  require('express')
const UserModel = require('../model/User')
const authRouter = Router();



authRouter.post("/signup", async(req,res) => {
    console.log(req.body)
    const user = await new UserModel(req.body)
    user.save((err,success) => {
        if(err) {
          return  res.status(500).send("error occured")
        }
        return res.status(201).send({message: "sign up success", token: 54321})
    })
    // res.send("signup succesfull",req.body)
})

authRouter.get("/", (req,res) => {
    res.send("auth here")
})

authRouter.post("/login", async(req,res) => {
    if(!req.body.email || !req.body.password) {
      return res.status(400).send("Required all credentials to be filled")
    }
    const user = await UserModel.find(req.body)
    console.log(user[0])
    if(user.length >=1) {
     return res.status(201).send(user)
    }
   else {
    res.status(404).send({message:"Wrong credentials"})
   }
  })


module.exports = authRouter;