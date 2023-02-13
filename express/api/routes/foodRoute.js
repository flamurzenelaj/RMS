import express from 'express';
import foodController from '../Controllers/foodController.js';
const currentPath = process.cwd();
// import checkIfAuthenticated from '../middlewares/checkIfAuthenticated';


const foodRoute = express.Router();
// foodRoute.use(checkIfAuthenticated);

foodRoute.get('/list', foodController.list);
foodRoute.get('/:id', foodController.get);


import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${currentPath}/../public/foodImages/`);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });
console.log(upload)
foodRoute.post('/create', upload.single('file'), foodController.create);
// foodRoute.post('/create', upload.single('file'),(req,res)=>{
//     res.json({file:req.file});
// });

foodRoute.put('/update',upload.single('file'), foodController.put);
foodRoute.delete('/:id', foodController.delete);

export default foodRoute;