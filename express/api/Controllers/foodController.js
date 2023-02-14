import foodModel from '../models/foodModel.js';
import fs from 'fs'
const currentPath = process.cwd();
const filesDir = `${process.cwd()}/public/foodImages/`;

const foodController = {
    list: async (req, res) => {
        const list = await foodModel.find();
        return res.json(list)
    },
    get: async (req, res) => {

        const { id } = req.params

        const foundItem = await foodModel.findOne({ _id: id })
        return res.json(foundItem)
    },
    create: async (req, res) => {
        try {
            const foodData = new Object({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                file: req.file.filename
            })

            const newfood = new foodModel(foodData);
            await newfood.save();
            return res.json(newfood);
        } catch (err) {
            return res.json({
                message: err.message
            })
        }
    },
    savePhoto: () => {
        const multer = require('multer');
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, `${currentPath}/../public/foodImages/`);
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        });
        upload.single('file');
    },
    delete: async (req, res) => {
        const { id } = req.params;
        const deletedFood = await foodModel.findOne({
            _id: id,
        });
        const food = await foodModel.deleteOne({ _id: id });
        if (food.deletedCount != 0) {
            console.log(filesDir)
            fs.unlinkSync(`${currentPath}/api/public/foodImages/` + deletedFood.file);
            return res.json({ message: 'Deleted Succefully' });
        }
        else
            return res.status(400).json({ message: 'Nothing Deleted' });
    },
    put: async (req, res) => {
        try {
            const foodid = req.body._id;
            if (req.file) {
                var currFood = await foodModel.findOne({
                    _id: foodid,
                });
                var foodData = new Object({
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                    file: req.file.filename
                })
            }
            else {
                var foodData = new Object({
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                })
            }
            const updatedFood = await foodModel.updateOne({ _id: foodid }, foodData);

            if (updatedFood.modifiedCount != 0) {
                if (currFood.file) {
                    fs.unlinkSync(`${currentPath}/api/public/foodImages/` + currFood.file);
                }
            }
            return res.json(updatedFood);
        } catch (err) {
            return res.json({
                message: err.message
            })
        }
    },
}

export default foodController;
