import dotenv from 'dotenv';

function loadEnv(){
    // TODO: handle errors later -> could not find load env variables and make essential variables 
    dotenv.config();
}

export default loadEnv;