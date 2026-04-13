const asyncHandler=(fn)=>{
    return (req,res,next) => {
        try{
            Promise.resolve(fn(req,res,next)).catch((error)=>next(error));
        } catch(error){
            next(error);
        }
    }
}

export default asyncHandler;