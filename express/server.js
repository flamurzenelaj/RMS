import express from "express";
import usersRoute from "./api/routes/usersRoute.js";
import getAuthToken from "./api/middlewares/getAuthToken.js"
import cors from "cors";
import helmet from "helmet";
import adminRoute from "./api/routes/adminRoute.js";
import foodRoute from "./api/routes/foodRoute.js";
import drinkRoute from "./api/routes/drinkRoute.js";
import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/RMS').then(() => {
    console.log('Connected to MongoDB on port 27017')

    const app = express();
    const port = process.env.PORT || 3000;

    app.use(cors());
    app.use(helmet());

    app.use(express.urlencoded({
        extended: true
    }))
    app.use(express.json());

    app.use(getAuthToken);

    app.use("/users", usersRoute);

    app.use("/adminRoute", adminRoute);

    app.use("/food", foodRoute);
    
    app.use("/drink", drinkRoute);



    app.listen(port, () => {
        console.log('api_app is listening on port ' + port);
    });
})