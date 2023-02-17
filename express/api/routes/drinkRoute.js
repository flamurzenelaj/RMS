import express from 'express';
import drinkController from '../Controllers/drinkController.js';
const currentPath = process.cwd();
// import checkIfAuthenticated from '../middlewares/checkIfAuthenticated';


const drinkRoute = express.Router();
// drinkRoute.use(checkIfAuthenticated);

drinkRoute.get('/list', drinkController.list);
drinkRoute.get('/:id', drinkController.get);


import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${currentPath}/../express/api/public/drinkImages/`);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });
drinkRoute.post('/create', upload.single('file'), drinkController.create);
// drinkRoute.post('/create', upload.single('file'),(req,res)=>{
//     res.json({file:req.file});
// });

drinkRoute.put('/update',upload.single('file'), drinkController.put);
drinkRoute.delete('/:id', drinkController.delete);

export default drinkRoute;
