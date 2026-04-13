import express from 'express';
import loadEnv from './src/config/env';
import connectToDatabase from './src/config/database';
import { FRONTEND_URL } from './src/constants/essential-constants';
import globalMiddleware from './src/middlewares/global-middlware';








async function startServer(){
    try{

        // load env variables 
        loadEnv();

        // connect to database 
        await connectToDatabase();

        // start the express appp
        const app = express();

        // handle global middlewares 
        app.use(cors(
            {
                origin:[FRONTEND_URL]
            }
        ));

        app.use(express.json());
        
        // default route 
        app.get("/",(req,res)=>{
            res.send(200).json({
                success:true,
                message:"Server is running ..."
            });
        })

        // routes 



        // global error middleware 
        app.use(globalMiddleware);

    } catch(error){
        console.log(`Error in starting the server -> `);
        console.error(error.message);
        process.exit(1);
    }
}

startServer();