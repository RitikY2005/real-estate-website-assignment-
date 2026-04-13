import express from 'express';
import connectToDatabase from './src/config/database.js';
import { FRONTEND_URL, PORT } from './src/constants/env-variables.js';
import globalMiddleware from './src/middlewares/global-middlware.js';
import websiteContentRoutes from './src/routes/website-content-routes.js';
import cors from 'cors';
import adminRoutes from './src/routes/admin-routes.js';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';

async function startServer() {
    try {


        // connect to database 
        await connectToDatabase();

        // start the express appp
        const app = express();

        // handle global middlewares 
        app.use(cors(
            {
                origin: [FRONTEND_URL],
                credentials:true
            },
            
        ));

        app.use(rateLimit({
            windowMs:1*60*60*1000, // per hour allow only 50 requests per ip
            limit:50,
            message:{
                status:429,
                error:"Too many requests, try after 1 hour"
            }
        }))

        app.use(express.json());
        app.use(cookieParser());

        // default route 
        app.get("/", (req, res) => {
            res.status(200).json({
                success: true,
                message: "Server is running ..."
            });
        })

        // routes 

        app.use('/api/content', websiteContentRoutes);
        app.use('/api/admin',adminRoutes);

        // global error middleware 
        app.use(globalMiddleware);


        // start the server 
        app.listen(PORT,()=>{
            console.log(`Server is running at port : ${PORT}`);
        })

    } catch (error) {
        console.log(`Error in starting the server -> `);
        console.error(error.message);
        process.exit(1);
    }
}

startServer();