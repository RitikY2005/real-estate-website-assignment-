class customError extends Error{
    
    constructor(message="Something went wrong",code=500){
        super(message);
        this.statusCode=code;

        Error.captureStackTrace(this,this.constructor);
    }


};

export default customError;