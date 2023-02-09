import express from 'express';
import adminController from '../Controllers/adminController.js';
// import checkIfAuthenticated from '../middlewares/checkIfAuthenticated';

const adminRoute=express.Router();

// adminRoute.use(checkIfAuthenticated);

adminRoute.post('/addadmin',adminController.addAdmin);

export default adminRoute;