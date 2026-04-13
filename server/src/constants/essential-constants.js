
export const getEnvVariable=(key)=>{
    if(!process.env[key]){
        throw new Error(`Missing environment variable -> ${key}`);
    }

    return process.env[key];
}


export const PORT=getEnvVariable("PORT");
export const NODE_ENV=getEnvVariable("NODE_ENV");
export const FRONTEND_URL=getEnvVariable("FRONTEND_URL");
export const MONGODB_URI=getEnvVariable("MONGODB_URI");