import drinkModel from '../models/drinkModel.js';
import fs from 'fs'
const currentPath = process.cwd();
const filesDir = `${process.cwd()}/public/drinkImages/`;

const drinkController = {
    list: async (req, res) => {
        const list = await drinkModel.find();
        return res.json(list)
    },
    get: async (req, res) => {

        const { id } = req.params

        const foundItem = await drinkModel.findOne({ _id: id })
        return res.json(foundItem)
    },
    create: async (req, res) => {
        try {
            const drinkData = new Object({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                file: req.file.filename
            })

            const newdrink = new drinkModel(drinkData);
            await newdrink.save();
            return res.json(newdrink);
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
                cb(null, `${currentPath}/../public/drinkImages/`);
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        });
        upload.single('file');
    },
    delete: async (req, res) => {
        const { id } = req.params;
        const deletedDrink = await drinkModel.findOne({
            _id: id,
        });
        const drink = await drinkModel.deleteOne({ _id: id });
        if (drink.deletedCount != 0) {
            console.log(filesDir)
            fs.unlinkSync(`${currentPath}/api/public/drinkImages/` + deletedDrink.file);
            return res.json({ message: 'Deleted Succefully' });
        }
        else
            return res.status(400).json({ message: 'Nothing Deleted' });
    },
    put: async (req, res) => {
        try {
            const drinkid = req.body._id;
            if (req.file) {
                var currDrink = await drinkModel.findOne({
                    _id: drinkid,
                });
                var drinkData = new Object({
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                    file: req.file.filename
                })
            }
            else {
                var drinkData = new Object({
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                })
            }
            const updatedDrink = await drinkModel.updateOne({ _id: drinkid }, drinkData);

            if (updatedDrink.modifiedCount != 0) {
                if (currDrink.file) {
                    fs.unlinkSync(`${currentPath}/api/public/drinkImages/` + currDrink.file);
                }
            }
            return res.json(updatedDrink);
        } catch (err) {
            return res.json({
                message: err.message
            })
        }
    },
}

export default drinkController;
