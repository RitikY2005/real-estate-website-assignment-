const globalMiddleware=(err,req,res,next)=>{

    let errorMessage=err.message || 'Server error';
    let statusCode=err.statusCode || 500;

    res.send(statusCode).json({
        success:false,
        message:errorMessage,
        error:errorMessage
    });
}

export default globalMiddleware;