import asyncHandler from "../middlewares/async-handler.js";
import websiteContentModel from "../models/website-model.js";

export const getWebsiteContent=asyncHandler(async (req,res,next)=>{
    const websiteContent= await websiteContentModel.findOne();

    res.status(200).json({
        success:true,
        message:"fetched web content successfully",
        websiteContent
    });
});