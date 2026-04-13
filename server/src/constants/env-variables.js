import 'dotenv/config'; // load all the env variables ;


export const getEnvironmentVariable=(key)=>{
    if(!process.env[key]){
        throw new Error(`Missing environment variable -> ${key}`);
    }

    return process.env[key];
}

export const PORT=getEnvironmentVariable('PORT');
export const NODE_ENV=getEnvironmentVariable('NODE_ENV');
export const FRONTEND_URL=getEnvironmentVariable('FRONTEND_URL');
export const MONGODB_URI=getEnvironmentVariable('MONGODB_URI');


