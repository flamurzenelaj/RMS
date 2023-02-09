import admin from '../services/firebase.js';
const db = admin.firestore();

const adminController = {
    addAdmin: async (req, res) => {
        const { email } = req.body;
        try {
            const user = await admin.auth().getUserByEmail(email)

            if (!user.customClaims) {
                admin.auth().setCustomUserClaims(user.uid, {
                    admin: true,
                });
                db.collection('roles').doc(user.uid).set({
                    email: user.email,
                    role: { admin: true }
                })           
                 return res.json({        
                     message: `${email} has been made as admin!`,
                });
            }
            else{
                return res.json({message:"This user is alredy an admin"})
            }
        } catch (err) {
            return res.json({
                message: err.message
            })
        }
    }
}

export default adminController;
