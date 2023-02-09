import admin from '../services/firebase.js';
import MsgModel from '../models/MsgModel.js';

const db = admin.firestore();

const user = {
    register: async (req, res) => {

        const { email, password } = req.body;

        try {
            const user = await admin.auth().createUser({
                email, password
            });
            if (email == "admin@localhost.com" && password == "test123") {
                const customClaims = { admin: true };
                await admin.auth().setCustomUserClaims(user.uid, customClaims);
                await db.collection('roles').doc(user.uid).set({
                    email: user.email,
                    role: customClaims
                })
            }
            return res.json(user);
        } catch (err) {
            console.log(err.message);
            return res.json({
                message: err.message
            })
        }
    },
    addmsg: async (req, res) => {
        try {
            const Data = req.body;
            const newData = new MsgModel(Data);
            await newData.save();
            return res.json(newData);
        }catch(err){
            res.json({err:error.message})
        }
       
    }
}
export default user;