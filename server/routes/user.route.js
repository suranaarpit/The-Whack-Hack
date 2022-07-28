const { Router } = require("express");
const { getGoogleUser } = require("../Auth/user.oauth");
const userRouter = Router();
userRouter.get(`/auth/google/callback`, getGoogleUser);
module.exports = { userRouter };
