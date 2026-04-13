import { NODE_ENV } from "../constants/env-variables.js";
import asyncHandler from "../middlewares/async-handler.js";
import customError from "../utils/customError.js";
import websiteContentModel from '../models/website-model.js';
import cleanObject from '../utils/cleanObject.js';

const cookieOptions={
    httpOnly:true,
    secure:NODE_ENV==="production"?true:false,
    sameSite:"none",
    maxAge:2*24*60*60*1000 ,// 2 DAYS 
};

export const login=asyncHandler((req,res,next)=>{
    const {username,password} = req.body;
    
    if(!username || !password){
        return next(new customError('Please provide all the fields',400));
    }

    if(username!=="admin" && password!="admin"){
        return res.status(401).json({
            success:false,
            message:"Invalid credentials"
        });
    } 

    res.setCookie('token','this_is_cookie',cookieOptions);

    res.status(200).json({
            success:true,
            message:"login successful"
        });
});

export const updateContent=asyncHandler(async (req,res,next)=>{
    const cleanedData=cleanObject(req.body);

    const updatedContent=await websiteContentModel.findOneAndUpdate(
        {},
        {$set:cleanedData},
        {new:true,upsert:true} // will return the updated document , upsert -> creates a new document if none exist , good for initializing database
    );

    res.status(200).json({
        success:true,
        message:"Content updated successfullly",
        updatedContent
    })
    
});