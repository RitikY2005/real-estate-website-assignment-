import customError from "../utils/customError.js";
import asyncHandler from "./async-handler.js";

export const isLoggedIn=asyncHandler((req,res,next)=>{
    const {token}=req.cookies;

    if(!token){
        return next(new customError('You are not logged in',403));
    }

    next();

});