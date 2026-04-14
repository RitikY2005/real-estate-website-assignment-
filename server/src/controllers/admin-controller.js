import { NODE_ENV } from "../constants/env-variables.js";
import asyncHandler from "../middlewares/async-handler.js";
import customError from "../utils/customError.js";
import websiteContentModel from '../models/website-model.js';
import cleanObject from '../utils/cleanObject.js';

const cookieOptions={
    httpOnly:true,
    secure:NODE_ENV==="production"?true:false,
    sameSite:NODE_ENV==="production"?"none":"lax",
    maxAge:2*24*60*60*1000 ,// 2 DAYS 
};

export const login=asyncHandler(async (req,res,next)=>{
    const {userName,password} = req.body;

    console.log("Req body->",req.body);
    
    if(!userName || !password){
        return next(new customError('Please provide all the fields',400));
    }

    if(userName!=="admin" || password!=="admin"){
        return res.status(401).json({
            success:false,
            message:"Invalid credentials"
        });
    } 

    res.cookie('token','this_is_cookie',cookieOptions);

    res.status(200).json({
            success:true,
            message:"login successful"
    });
});

export const logout=asyncHandler(async (req,res,next)=>{
    res.clearCookie('token',cookieOptions);
    
    res.status(200).json({
            success:true,
            message:"logged out"
        });
});

export const updateContent=asyncHandler(async (req,res,next)=>{
    const cleanedData=cleanObject(req.body);

    const updatedContent=await websiteContentModel.findOneAndUpdate(
        {},
        {$set:cleanedData},
        {returnDocument:'after',upsert:true} // will return the updated document , upsert -> creates a new document if none exist , good for initializing database
    );

    res.status(200).json({
        success:true,
        message:"Content updated successfullly",
        updatedContent
    })
    
});